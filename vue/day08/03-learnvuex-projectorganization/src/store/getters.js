export default {
  doubleCounter(state){
    return state.counter*2;
  },
  more20Student(state){
    return state.students.filter(stu=>stu.age>20);
  },
  more20StudentLength(state,getters){
    return getters.more20Student.length;
  },
  moreAgeStudent(state){
    // return function (age) {
    //   return state.students.filter(stu=>stu.age>age);
    // }
    return (age)=>{
      return state.students.filter(stu=>stu.age>age);
    }
  }
}
