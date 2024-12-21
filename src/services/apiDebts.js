import supabase from "./supabase";

export async function getDebts(id) {
  const { data, error } = await supabase
    .from("debts")
    .select("*,debtors(name)")
    .eq("debtor_id", id);

  if (error) {
    throw new Error("Debts could not be loaded.");
  }

  return data;
}

export async function addDebt(debt) {
  const { data, error } = await supabase.from("debts").insert([debt]);

  if (error) {
    throw new Error("Debt could not be added.");
  }

  return data;
}

export async function editDebt(id, debt) {
  const { data, error } = await supabase
    .from("debts")
    .update({ ...debt })
    .eq("id", id);

  if (error) {
    throw new Error("Debt could not be edited.");
  }

  return data;
}

export async function deleteDebt(id) {
  const { data, error } = await supabase.from("debts").delete().eq("id", id);

  if (error) {
    throw new Error("Debt could not be deleted.");
  }

  return data;
}
