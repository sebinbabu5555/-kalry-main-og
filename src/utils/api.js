import supabase from '../lib/supabase'; // ✅ Make sure this path is correct

/* ======================================================
   🥗 FOOD LOG API FUNCTIONS
   ====================================================== */

/**
 * Fetch all food logs for a specific user.
 */
export const getFoodLogs = async (userId) => {
  try {
    if (!userId) throw new Error('userId is required');

    const { data, error } = await supabase
      .from('user_food_logs') // ✅ use correct table name
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error('Error getting food logs:', err);
    throw err;
  }
};

/**
 * Create a new food log entry.
 */
export const createFoodLog = async (foodLog) => {
  try {
    if (!foodLog?.user_id) throw new Error('user_id is required');

    const { data, error } = await supabase
      .from('user_food_logs') // ✅ correct table
      .insert([{ ...foodLog, created_at: new Date().toISOString() }])
      .select('*')
      .single();

    if (error) throw error;
    return data;
  } catch (err) {
    console.error('Error creating food log:', err);
    throw err;
  }
};

/**
 * Update a specific food log by ID.
 */
export const updateFoodLog = async (id, updates) => {
  try {
    if (!id) throw new Error('id is required for update');

    const { data, error } = await supabase
      .from('user_food_logs') // ✅ correct table
      .update(updates)
      .eq('id', id)
      .select('*')
      .single();

    if (error) throw error;
    return data;
  } catch (err) {
    console.error('Error updating food log:', err);
    throw err;
  }
};

/**
 * Delete a specific food log by ID.
 */
export const deleteFoodLog = async (id) => {
  try {
    if (!id) throw new Error('id is required for delete');

    const { error } = await supabase
      .from('user_food_logs') // ✅ correct table
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error('Error deleting food log:', err);
    throw err;
  }
};
