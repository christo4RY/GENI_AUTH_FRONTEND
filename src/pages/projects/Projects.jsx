import React, { useEffect } from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import "./Projects.css"
import { useGetProjectsQuery } from '../../features/api/apiSlices/ProjectApi';

const Projects = () => {
  const { data: projects, isLoading } = useGetProjectsQuery();
  return (
    <div className='w-full'>
      <h4 className=' font-light text-sm text-slate-500'>Dashboard</h4>
      <h1 className='text-2xl md:text-3xl font-bold dark:text-slate-100'>Products</h1>
      <div className="relative mt-10">
        {
          isLoading && (<h1>isLoading</h1>)
        }
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={3}
          navigation
        >
          {projects?.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <a href={project.project_url}>
                  <div className="p-4 h-40 bg-white dark:bg-[#1A1D23] dark:border-slate-700 dark:text-slate-100 dark:border flex rounded-lg relative overflow-hidden">
                    <div>
                      <h1 className=" text-xl font-semibold">{project.project_name}</h1>
                      <p className=" text-xs">{project.project_name}</p>
                    </div>
                    <div className=" absolute bottom-10 h-20 flex mt-2 items-center justify-center w-full right-1  -rotate-[10deg]">
                      <img src={project.project_logo} className="w-[10rem] " alt="" />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    </div>
  )
}

export default Projects
