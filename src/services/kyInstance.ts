import ky from "ky";
import { Response } from "@/services/types";

const authExemptUrls = ["login", "register"];

const kyInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        if (!authExemptUrls.some((url) => request.url.includes(url))) {
          const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1];

          if (token) {
            request.headers.set("Authorization", `Bearer ${token}`);
          }
        }
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (authExemptUrls.some((url) => request.url.includes(url))) {
          const res: Response<unknown> = await response.json();
          if (res.token) {
            document.cookie = `token=${res.token}`;
          }
        }
      },
    ],
  },
});

export default kyInstance;
