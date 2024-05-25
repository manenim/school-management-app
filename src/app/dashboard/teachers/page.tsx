"use client"

import { DataTable } from '@/components/data-table';
import { useGetAllTeachersQuery } from '@/services/teachersData';
import React from 'react'
import { columns } from './columns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CirclePlus } from 'lucide-react';

const TeachersView = () => {
    const {
      data: teachers,
      error,
      isLoading,
    } = useGetAllTeachersQuery();

    console.log('teachres', teachers)

  return (
    <div>
      <div className="flex items-center justify-between w-[80%] mx-auto pt-8">
        <h3 className="text-2xl font-bold mb-8 ">All Teachers</h3>
        <Link href="/dashboard/teachers/register">
          <Button>
                      <CirclePlus />
                      <h4 className='ml-2'>
                          
                            Add a Teacher
                      </h4>
          </Button>
        </Link>
      </div>
      <div className="w-[80%] mx-auto">
        {teachers && <DataTable columns={columns} data={teachers} />}
      </div>
    </div>
  );
}

export default TeachersView
