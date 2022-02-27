import * as Medusa from "@medusajs/medusa-js/dist/index.js";
import { onMount } from "svelte";

export const MedusaClient = () => {
    onMount(async () => {
        console.log("Medusa", Medusa)
    });
}