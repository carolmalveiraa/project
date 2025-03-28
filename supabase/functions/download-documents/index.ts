import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import JSZip from 'npm:jszip@3.10.1';

serve(async (req) => {
  try {
    const { employeeId } = await req.json();
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    // Fetch employee documents
    const { data: documents, error } = await supabaseClient
      .from('documents')
      .select('*')
      .eq('employee_id', employeeId);

    if (error) throw error;

    // Create a zip file
    const zip = new JSZip();

    // Add each document to the zip
    for (const doc of documents) {
      const response = await fetch(doc.file_url);
      const blob = await response.blob();
      zip.file(doc.name, blob);
    }

    // Generate zip file
    const zipBlob = await zip.generateAsync({ type: 'blob' });

    // Upload zip to storage
    const fileName = `employee-${employeeId}-documents.zip`;
    const { data: uploadData, error: uploadError } = await supabaseClient
      .storage
      .from('downloads')
      .upload(fileName, zipBlob);

    if (uploadError) throw uploadError;

    // Get download URL
    const { data: { publicUrl } } = supabaseClient
      .storage
      .from('downloads')
      .getPublicUrl(fileName);

    return new Response(
      JSON.stringify({ downloadUrl: publicUrl }),
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
});