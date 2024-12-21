import { USER_ID } from "../ui/ProtectedRoute";
import supabase from "./supabase";

export async function getDebtors() {
  const { data, error } = await supabase
    .from("debtors")
    .select("*,debts(*)")
    .eq("user_id", USER_ID);

  if (error) {
    throw new Error("Debtors could not be loaded.");
  }
  // console.log(data);

  const newData = data.map((d) => {
    return {
      ...d,
      debts:
        d.debts.length > 0
          ? d.debts.reduce((acc, cur) => acc + cur.amount, 0)
          : null,
    };
  });

  return newData;
}

export async function getDebtor(id) {
  const { data, error } = await supabase
    .from("debtors")
    .select("*")
    .eq("id", id);

  if (error) {
    throw new Error("Debtor could not be loaded.");
  }
  return data;
}

export async function addDebtor(debtor) {
  const { data, error } = await supabase.from("debtors").insert([debtor]);

  if (error) {
    throw new Error("Debtor could not be added.");
  }

  return data;
}

export async function editDebtor(id, debtor) {
  const { data, error } = await supabase
    .from("debtors")
    .update({ ...debtor })
    .eq("id", id);

  if (error) {
    throw new Error("Debtor could not be edited.");
  }

  return data;
}

export async function deleteDebtor(id) {
  const { data, error } = await supabase.from("debtors").delete().eq("id", id);

  if (error) {
    throw new Error("Debtor could not be deleted.");
  }

  return data;
}
