"use client"

import { SkeletonCard } from '@/components/skeletonCard';
import { useGetTeacherByIdQuery } from '@/services/teachersData';
import React, { Suspense } from 'react'

type Props = {
  params: {
    id: string;
  };
};

const Teacher = (props: Props) => {
  const id = props.params.id;
  const teachId = Number(id);

  const { data: teacher, error, isLoading } = useGetTeacherByIdQuery(teachId);

  return (
    <div>
      {!teacher ? (
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
          <div className="title">
              <h2 className="text-center mt-8 py-8 text-2xl font-bold">
                {teacher.name}'s profile
            </h2>
          </div>
          <div className="wrapper bg-white border rounded-lg w-[60%] min-h-[60vh] mx-auto">
            <div className="px-8 mt-14">
              <h3 className="py-4">
                <span className="font-bold">National ID number: </span>
                {teacher.nationalId}
              </h3>
              <h3 className="py-4">
                <span className="font-bold">Title: </span>
                {teacher.title}
              </h3>
              <h3 className="py-4">
                <span className="font-bold">Name: </span>
                {teacher.name}
              </h3>
              <h3 className="py-4">
                <span className="font-bold">Surname: </span>
                {teacher.surname}
              </h3>
              <h3 className="py-4">
                <span className="font-bold">Date Of Birth: </span>
                {new Date(teacher.dateOfBirth).toLocaleDateString()}
              </h3>
              <h3 className="py-4">
                <span className="font-bold">Teacher Number: </span>
                {teacher.teacherNumber}
              </h3>
              <h3 className="py-4">
                <span className="font-bold">Salary: </span>
                {teacher.salary || "Not Specified!"}
              </h3>
            </div>
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default Teacher