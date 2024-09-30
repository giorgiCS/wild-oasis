import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner className="text-xl text-primary-200" />
      <p>loading cabin data....</p>
    </div>
  );
}
