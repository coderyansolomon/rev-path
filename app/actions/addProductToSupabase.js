'use server';

import { createClient } from '../supabaseServerClient';

export async function addProductToSupabase(formData) {
  const title = formData.get('title');
  const description = formData.get('description');
  const price = parseFloat(formData.get('price'));
  const supabase = createClient()

  const { error } = await supabase.from('products').insert([
    { title, description, price }
  ]);

  if (error) {
    throw new Error(`Error adding product: ${error.message}`);
  }

}
