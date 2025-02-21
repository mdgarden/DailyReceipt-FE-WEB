// 여기서 컴포넌트를 한번에 모아서 불러오는 것을 추천합니다! (절대 경로를 설정했기때문에 componetns만 해도 불러올수 있어요!)

// Temp
export { TempComponent } from "./TempComponent";

/**
 * atoms
 */
//TodoPage
export { HeaderText } from "./atoms/HeaderText";
export { DayOfWeek } from "./atoms/DayOfWeek";
export { SquareBtn } from "./atoms/SquareBtn";
export { Portal } from "./atoms/Portal";
export { TimerImage } from "./atoms/TimerImage";
//ReceiptPage
export { ReceiptPaperTriangle } from "./atoms/receiptPaperTriangle";
export { ReceiptPaperInfo } from "./atoms/receiptPaperInfo";
export { ReceiptBarcode } from "./atoms/receiptBarcode";
export { ReceiptQuotes } from "./atoms/receiptQuotes";

export { BackBtn } from "./atoms/BackBtn";
/**
 * molecules
 */
//TodoPage
export { Week } from "./molecules/Week";
export { TodoHeader } from "./molecules/TodoHeader";
export { TodoList } from "./molecules/TodoList";

//ReceiptPage
export { ReceiptPaper } from "./molecules/receiptPaper";
export { ReceiptPaperContents } from "./molecules/receiptPaperContents";
export { ReceiptTodo } from "./molecules/receiptTodo";

// organisms
export { LoadingModal } from "./organisms/LoadingModal";
export { AlertModal } from "./organisms/AlertModal";
// templates
export { ModalTemplate } from "./templates/ModalTemplate";

/**
 * Pages
 */
export { TodoPage } from "./pages/TodoPage";
export { LoginPage } from "./pages/LoginPage";
export { ReceiptPage } from "./pages/ReceiptPage";
export { UserPage } from "./pages/UserPage";
export { AuthPage } from "./pages/AuthPage";
