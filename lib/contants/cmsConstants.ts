import { CategoryName } from '@prisma/client';

export const pictureCategories = Object.values(CategoryName);
export const blurDataURL =
    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 2400 1601'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAIRAAAQMEAQUAAAAAAAAAAAAAAQACAwQFCBETITJEUdL/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EABoRAQEAAgMAAAAAAAAAAAAAAAECABIEMUH/2gAMAwEAAhEDEQA/AJLRkG+kgbELPTyxcXQOlc0k++0rKkyA3I4mxU+yT5DvhEVZrIqHeFxx4p1fM//Z'/%3E%3C/svg%3E";

