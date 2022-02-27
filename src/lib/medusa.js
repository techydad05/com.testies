import Medusa from "@medusajs/medusa-js";
import { onMount } from "svelte";

export const MedusaClient = () => {
    onMount(async () => {
        console.log("Medusa", Medusa)
    });
}