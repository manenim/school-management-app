"use client"
import { SkeletonCard } from "@/components/skeletonCard";
import { useGetAllStudentsQuery } from "@/services/studentsApi";
import { useGetAllTeachersQuery } from "@/services/teachersData";
import Link from "next/link";
import { Suspense } from "react";

const Display = () => {
    const {
      data: teachers,
      error,
      isLoading,
  } = useGetAllTeachersQuery("yiyo7979");
  const { data: students, error:err, isLoading: load } = useGetAllStudentsQuery("data");
  return (
    <div>
      <h3 className="font-extrabold text-5xl px-12 py-16">Overview</h3>

      <div className="flex gap-14 px-12 mt-12 ml-[6%]">
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
            <div className="card cursor-pointer shadow-lg bg-white border rounded-lg w-[34%] min-h-[38vh]">
              <Link href="/dashboard/teachers">
              <h3 className="font-bold text-[1.4rem] pt-8 pl-4">
                Total Number of Teachers
              </h3>
              <h3 className="font-bolder text-[8rem] pl-[6rem] pt-6">{teachers.length}</h3>
                </Link>
                </div>
          </Suspense>
        )}
        {!students ? (
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
           
              <div className="card shadow-lg cursor-pointer bg-white border rounded-lg w-[34%] min-h-[38vh]">
                              <Link href="/dashboard/students">

          <h3 className="font-bold text-[1.4rem] pt-8 pl-4">
            Total Number of Students
          </h3>
                  <h3 className="font-bolder text-[8rem] pl-[6rem] pt-6">{students.length}</h3>
                  </Link>
        </div>
        </Suspense>
        )}
          </div>
    </div>
  );
};

export default Display;
