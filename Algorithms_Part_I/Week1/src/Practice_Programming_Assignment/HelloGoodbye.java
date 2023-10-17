/**
 * HelloGoodbye
 */
public class HelloGoodbye {

    public static void main(String[] args) {
        /*
         * Hello Kevin and Bob.
         * Goodbye Bob and Kevin.
         */
        if (args.length ==2) {
            System.out.println("Hello " + args[0] + " and " + args[1]);
            System.out.println("Goodbye " + args[1] + " and " + args[0]);
        }
    }
}