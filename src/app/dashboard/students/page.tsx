"use client"

import { DataTable } from '@/components/data-table';
import { useGetAllTeachersQuery } from '@/services/teachersData';
import React, { Suspense } from 'react'
import { columns } from './columns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CirclePlus } from 'lucide-react';
import { useGetAllStudentsQuery } from '@/services/studentsApi';
import { SkeletonCard } from '@/components/skeletonCard';

const TeachersView = () => {
    const {
      data: students,
      error,
      isLoading,
    } = useGetAllStudentsQuery('data');


  return (
    <div>
      <div className="flex items-center justify-between w-[80%] mx-auto pt-8">
        <h3 className="text-2xl font-bold mb-8 ">All Students</h3>
        <Link href="/dashboard/students/register">
          <Button>
            <CirclePlus />
            <h4 className="ml-2">Add a Student</h4>
          </Button>
        </Link>
      </div>
      <div className="w-[80%] mx-auto">
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
            <DataTable columns={columns} data={students} />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default TeachersView
