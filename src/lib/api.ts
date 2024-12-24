import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import { Project, Experience, Education } from './types';

// Projects
export const getProjects = async (): Promise<Project[]> => {
  const querySnapshot = await getDocs(collection(db, 'projects'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
};

export const addProject = async (project: Omit<Project, 'id'>) => {
  return await addDoc(collection(db, 'projects'), project);
};

// Experience
export const getExperiences = async (): Promise<Experience[]> => {
  const querySnapshot = await getDocs(collection(db, 'experiences'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Experience));
};

export const addExperience = async (experience: Omit<Experience, 'id'>) => {
  return await addDoc(collection(db, 'experiences'), experience);
};

// Education
export const getEducation = async (): Promise<Education[]> => {
  const querySnapshot = await getDocs(collection(db, 'education'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Education));
};

export const addEducation = async (education: Omit<Education, 'id'>) => {
  return await addDoc(collection(db, 'education'), education);
};