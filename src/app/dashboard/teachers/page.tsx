"use client"

import { DataTable } from '@/components/data-table';
import { useGetAllTeachersQuery } from '@/services/teachersData';
import React from 'react'
import { columns } from './columns';

const TeachersView = () => {
    const {
      data: teachers,
      error,
      isLoading,
    } = useGetAllTeachersQuery();

    console.log('teachres', teachers)

  return (
      <div>
          TeachersView
          <div className='w-[80%] mx-auto'>
              {teachers && <DataTable columns={columns} data={teachers} />}
</div>
    </div>
  )
}

export default TeachersView
