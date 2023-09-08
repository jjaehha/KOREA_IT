package day04;

import java.util.Scanner;

public class IfTask7 {
   public static void main(String[] args) {
      //  수학 x, y좌표를 통해 1~4사분면 구하기
      
      Scanner sc = new Scanner(System.in);
      System.out.println("x좌표를 입력하시오");
      int x = sc.nextInt();
      System.out.println("y좌표를 입력하시오");
      int y = sc.nextInt();
      System.out.println("좌표("+x+","+y+")");
      
      if(x>0 && y>0) {
         System.out.println("제 1사분면");
      }
      else if(x<0 && y>0) {
         System.out.println("제 2사분면");
      }
      else if(x<0 && y<0) {
         System.out.println("제 3사분면");
      }
      else if(x>0 && y<0){
         System.out.println("제 4사분면");
      }
      
   }
}