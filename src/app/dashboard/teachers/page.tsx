"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { useGetAllTeachersQuery } from "@/services/teachersData";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { columns } from "./columns";
import { Suspense } from "react";
import { SkeletonCard } from "@/components/skeletonCard";

const TeachersView = () => {
  const {
    data: teachers,
    error,
    isLoading,
  } = useGetAllTeachersQuery("yiyo7979");

  console.log("teachres", teachers);
 

  return (
    <div>
      <div className="flex items-center justify-between w-[80%] mx-auto pt-8">
        <h3 className="text-2xl font-bold mb-8 ">All Teachers</h3>
        <Link href="/dashboard/teachers/register">
          <Button>
            <CirclePlus />
            <h4 className="ml-2">Add a Teacher</h4>
          </Button>
        </Link>
      </div>
      <div className="w-[80%] mx-auto">
        {!teachers ? (
          <div>
            <SkeletonCard />
          </div>
        ) : (
          <Suspense
            fallback={
              <div>
                <SkeletonCard />
              </div>
            }>
            <DataTable columns={columns} data={teachers} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default TeachersView;
