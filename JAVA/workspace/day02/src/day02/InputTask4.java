package day02;

import java.util.Scanner;

public class InputTask4 {
   public static void main(String[] args) {
      /*
       * 좋아하는 숫자 , 좋아하는 동물을 입력받아 출력하기
       * 
       * 출력예시
       * 내가 좋아하는 숫자는 13이고, 내가 좋아하는 동물은 강아지다.
       * printf()를 사용해서 출력
       */
      String msg1 = "좋아하는 숫자 : ", msg2 ="좋아하는 동물 : ", animal =null;
      int num = 0;
      
      Scanner sc = new Scanner(System.in);
      System.out.println(msg1);
      num = sc.nextInt();
      sc.nextLine();
      System.out.println(msg2);
      animal = sc.nextLine();
      
      System.out.printf("내가 좋아하는 숫자는 %d이고, 내가 좋아하는 동물은 %s다.",num,animal);
      
      
   }
}