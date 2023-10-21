import Terra from "terra-api";

export const terra = new Terra(process.env.TERRA_DEV_ID ?? "", process.env.TERRA_API_KEY ?? "", process.env.TERRA_WEBHOOK_SECRET ?? "");

