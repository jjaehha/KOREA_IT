package car;

public class Main {
	public static void main(String[] args) {
		Car car = new Car("BMW", "White", 6500);
		car.enginStart();
		
		SuperCar sc = new SuperCar("BMW", "White", 6500, false);
	}
}
