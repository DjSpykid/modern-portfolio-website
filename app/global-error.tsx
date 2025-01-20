"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
    useEffect(() => {
      Sentry.captureException(error);
    }, [error]);
  
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
      </div>
    );
  }
  