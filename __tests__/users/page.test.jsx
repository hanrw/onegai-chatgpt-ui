import { render, screen } from '@iting-library/react'
import '@iting-library/jest-dom'
import Home from "../../app/example/page";

describe('Home', () => {
  it('renders a link to the about page', () => {
    render(<Home />)

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
  })

  it("navigation menu is visible on home page", () => {
    // Assert that the navigation menu is visible on the home page
    expect(page.getElements("nav")).toBeTruthy();
  });

  //
  //
  // it("user messages are displayed on the right and chatbot messages on the left", () => {
  //   // Assert that the user's message is displayed on the right and chatbot messages on the left
  //   expect(chat.getInputLocationByMessage("user")).toBe("right");
  //   expect(chat.getInputLocationByMessage("chatbot")).toBe("left");
  // });
  //
  //
  //
  // it("chat history is displayed when the user scrolls up", () => {
  //   // Assert that the chat history is displayed above the message input field when the user scrolls up
  //   expect(chat.scrollUp()).toBeTruthy();
  //   expect(chat.getElements("chat-history")).toBeTruthy();
  // });
  //
  //
  //
  // it("chat interface is customized based on business owner branding", () => {
  //   // Assert that the chat interface is customized based on business owner branding
  //   const header = chat.getHeader();
  //   expect(header).toHaveStyle("background-color: #ff0000"); // example custom color
  //   expect(header).toHaveStyle("color: #ffffff"); // example custom color
  // });
  //
  //
  //
  // it("chatbot prompts and suggestions are displayed in the chat interface", () => {
  //   // Assert that the chatbot prompts and suggestions are displayed in the chat interface
  //   expect(chat.getElements("suggestions")).toBeTruthy();
  //   expect(chat.getElements("prompts")).toBeTruthy();
  // });
  //
  //
  //
  // it("healthcare professionals can add notes to the chat", () => {
  //   // Assert that healthcare professionals can add notes to the chat
  //   expect(chat.addNoteAsProfessional("it note")).toBeTruthy();
  //   expect(chat.getElements("notes")).toBeTruthy();
  // });
  //
  //
  //
  // it("sales representatives can see a detailed view of suggested products", () => {
  //   // Assert that sales representatives can see a detailed view of suggested products
  //   expect(chat.clickSuggestedProduct("example product")).toBeTruthy();
  //   expect(chat.getElements("product-details")).toBeTruthy();
  // });
  //
  //
  //
  // it("chatbot's name and profile picture are displayed in the chat interface", () => {
  //   // Assert that the chatbot's name and profile picture are displayed in the chat interface
  //   const header = chat.getHeader();
  //   expect(header.getElements("chatbot-name")).toBeTruthy();
  //   expect(header.getElements("chatbot-profile-pic")).toBeTruthy();
  // });
  //
  //
  //
  // it("users can access help and support resources from the chat interface", () => {
  //   // Assert that users can access help and support resources from the chat interface
  //   const helpButton = chat.getElements("help-button");
  //   expect(helpButton).toBeTruthy();
  //   expect(chat.clickHelpButton()).toBeTruthy();
  //   expect(chat.getElements("support-resources")).toBeTruthy();
  // });
  //
  //
  //
  // it("alerts or notifications are displayed in the chat interface", () => {
  //   // Assert that alerts or notifications are displayed in the chat interface
  //   expect(chat.displayAlert("example alert message")).toBeTruthy();
  //   expect(chat.getElements("alert-message")).toBeTruthy();
  // });
})