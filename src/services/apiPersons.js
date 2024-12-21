import { USER_ID } from "../ui/ProtectedRoute";
import supabase from "./supabase";

export async function getPersons() {
  const { data, error } = await supabase
    .from("persons")
    .select("*")
    .eq("user_id", USER_ID);

  if (error) {
    throw new Error("Persons could not be loaded.");
  }

  return data;
}

export async function addPerson(person) {
  const { data, error } = await supabase.from("persons").insert([person]);

  if (error) {
    throw new Error("Person could not be added.");
  }

  return data;
}
