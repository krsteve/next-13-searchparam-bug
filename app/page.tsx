import { Suspense } from "react";
import Foo from "./Foo";

export default function ({ searchParams }: { searchParams: { foo?: string } }) {
    return <Suspense fallback={<div>LOADING</div>}>
        {/* @ts-ignore */}
        <Foo foo={searchParams.foo} />
    </Suspense>;
}