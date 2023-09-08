package day07;

import java.util.Scanner;

class Tv {
	int ch;
	int vol;
	boolean power;
	int inch;
	int price;
	String color;

	public Tv() {
	}

	public Tv(int inch, int price, String color) {
		this.inch = inch;
		this.price = price;
		this.color = color;
	}

	public Tv(int inch, int price, int ch) {
		this.inch = inch;
		this.price = price;
		this.ch = ch;
	}

	void powerOnOff() {
	}

	void ChUp() {
	}

	void ChDown() {
	}

}

class Tv3 {
	String color;
	int inch;
	int price;
	boolean power; // on : true off: false
	int channel;

	public Tv3(String color, int inch, int price, int channel) {
		this.color = color;
		this.inch = inch;
		this.price = price;
		this.channel = channel;
	}

	void powerOnOff() {
		power = !power;
	}

	int channelUp() {
		return ++channel;
	}

	int channelDown() {
		return --channel;
	}

}

public class TvTest {
	public static void main(String[] args) {
		String msg = "1.  전원버튼\n" + "2. 채널 올리기\n" + "3. 채널 내리기\n" + "입력 >> ";
		Scanner sc = new Scanner(System.in);
		Tv3 tv = new Tv3("White", 25, 8000000, 5);
		int choice = 0;

		while (true) {
			System.out.println();
			System.out.print(msg);
			choice = sc.nextInt();

			switch (choice) {
			case 1:
				if (tv.power) {
					System.out.println("전원 끄기");
				} else {
					System.out.println("전원 켜기");
				}
				tv.powerOnOff();
				break;
			case 2:
				if (tv.power) {
					System.out.println("채널: " + tv.channelUp());
				}
				break;
			case 3:
				if (tv.power && tv.channel > 1) {
					System.out.println("채널: " + tv.channelDown());
				}
				break;
			default:
				System.out.println("잘못 입력하셨습니다");
			}
		}
	}
}
