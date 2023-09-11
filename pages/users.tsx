import { builder } from "@/api/bulider";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function Users() {
  const {} = useQuery({
    queryFn: async () => await builder.use().users.fetch(),
    queryKey: builder.users.fetch.get(),
  });
  return (
    <div className="flex flex-col gap-1">
      <div></div>
    </div>
  );
}

export default Users;
