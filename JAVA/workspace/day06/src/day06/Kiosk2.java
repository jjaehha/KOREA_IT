package day06;

import java.util.Scanner;

public class Kiosk2 {
	   static Scanner sc = new Scanner(System.in);
	   public static void main(String[] args) {
	      String[] menus = new String[3];
	      int[] price = new int[3];
	      int choice = 0;
	      boolean isRun = true;
	      Kiosk2 kiosk =new Kiosk2();
	      
	      while(isRun) {
	         kiosk.printMainMenu();
	         choice = sc.nextInt();
	      
	         switch(choice) {
	         case 1:
	            kiosk.printMenu(menus, price);
	            kiosk.selectMenu(menus, price);
	            
	            break;
	         case 2:
	            kiosk.adminLogin(menus, price);
	            break;
	         case 3:
	            System.out.println("���α׷��� ����˴ϴ�.");
	            isRun = false;
	            break;
	         default :
	            System.out.println("�߸� �Է��߽��ϴ�.");
	         }      //switch
	         
	      }   // while
	   }   //main()
	   
	   void printMainMenu() {
	      System.out.println("##########################");
	      System.out.println("#JAVAĿ�ǿ� ���Ű� ȯ���մϴ�.#");
	      System.out.println("##########################");
	      System.out.println();
	      System.out.print("1. ��ü �޴� ����\n"
	            + "2. ������ �α���\n"
	            + "3. ����\n"
	            + "�Է� >> ");
	   }
	   
	   void printMenu(String[] menus, int[] price) {
	      System.out.println();
	      for(int i=0; i<menus.length; i++) {
	         if(menus[i] == null) {
	            System.out.println(i+1 + ". �޴��� �غ��� �Դϴ�!");
	            System.out.println("---------------------------");
	         }else {
	            System.out.println(i+1 + ". " + menus[i]);
	            System.out.println("���� : " + price[i]);
	            System.out.println("---------------------------");
	         }
	      }
	   }
	   
	   void selectMenu(String[] menus, int[] price) {
	      int choice = 0;
	      System.out.println();
	      System.out.print("�޴� ��ȣ�� �Է��ϼ��� >> ");
	      choice = sc.nextInt();
	      
	      if(menus[choice-1] == null) {
	         System.out.println("�ش� �޴��� �غ��� �Դϴ�.");
	         System.out.println();
	         return;
	      }
	      
	      System.out.println("*************************************");
	      System.out.println(menus[choice-1] + "��(��) �����ϼ̽��ϴ�.");
	      System.out.println("������ " + price[choice-1] + "�� �Դϴ�.");
	      System.out.println("*************************************");
	   }
	   
	   void adminLogin(String[] menus, int[] price) {
	      String id = null;
	      int pw = 0, choice = 0;
	      
	      System.out.println();
	      System.out.print("���̵� >> ");
	      id = sc.next();
	      System.out.print("�н����� >> ");
	      pw = sc.nextInt();
	      if(id.equals("admin") && pw == 1234) {
	         System.out.println();
	         System.out.println("�α��� ����");
	         System.out.print("1. �޴����\n"
	               + "2. �޴�����\n"
	               + "3. �޴�����\n"
	               + "4. ������\n"
	               + "�Է� >> ");
	         choice = sc.nextInt();
	         sc.nextLine();
	         switch(choice) {
	         case 1:
	            System.out.println();
	            System.out.println("�޴����");
	            System.out.println("==============");
	            
	            for(int i=0; i<menus.length; i++) {
	               System.out.print(i+1 + ". �޴� �̸� >> ");
	               menus[i] = sc.nextLine();
	               
	               System.out.print(menus[i] + " ���� >> ");
	               price[i] = sc.nextInt();
	               sc.nextLine();
	            }
	            break;
	         case 2:
	            System.out.println();
	            System.out.println("�޴�����");
	            System.out.println("============");
	            
	            System.out.println();
	            for(int i=0; i<menus.length; i++) {
	               if(menus[i] == null) {
	                  System.out.println(i+1 + ". �޴��� �غ��� �Դϴ�!");
	                  System.out.println("---------------------------");
	               }else {
	                  System.out.println(i+1 + ". " + menus[i]);
	                  System.out.println("���� : " + price[i]);
	                  System.out.println("---------------------------");
	               }
	            }
	            
	            System.out.print("������ �޴��� �����ϼ��� >> ");
	            choice = sc.nextInt();
	            sc.nextLine();
	            
	            menus[choice-1] = null;
	            price[choice-1] = 0;
	            break;
	         case 3:
	            System.out.println();
	            System.out.println("�޴�����");
	            System.out.println("============");
	            
	            System.out.println();
	            for(int i=0; i<menus.length; i++) {
	               if(menus[i] == null) {
	                  System.out.println(i+1 + ". �޴��� �غ��� �Դϴ�!");
	                  System.out.println("---------------------------");
	               }else {
	                  System.out.println(i+1 + ". " + menus[i]);
	                  System.out.println("���� : " + price[i]);
	                  System.out.println("---------------------------");
	               }
	            }
	            
	            System.out.print("������ �޴��� �����ϼ��� >> ");
	            choice = sc.nextInt();
	            sc.nextLine();
	            
	            System.out.print(choice-1 + ". �޴��̸� >> ");
	            menus[choice-1] = sc.nextLine();
	            System.out.print(menus[choice-1] + " ���� >> ");
	            price[choice-1] = sc.nextInt();
	            sc.nextLine();
	            break;
	         case 4:
	            System.out.println("���θ޴��� ���ư��ϴ�.");
	            System.out.println();
	            break;
	         default :
	            System.out.println("�߸� �Է��ϼ̽��ϴ�.");
	         }
	      }else {
	         System.out.println("�α��� ����");
	      }
	   }
	}

