import { Button } from "./Button";

export default async function ({ foo }: { foo?: string }) {
    // Wait 3 seconds
    await new Promise(resolve => setTimeout(resolve, 3000));
    return <div>
        <div>{foo ?? "No Params"}</div>
        <Button />
    </div>;
}