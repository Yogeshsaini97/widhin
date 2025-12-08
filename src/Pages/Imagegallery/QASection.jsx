import React, { useState, useEffect } from "react";
import "./QASection.css";

export default function QASection({ itemId }) {
  const storageKey = `qa_${itemId}`;
  const [qna, setQna] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || [];
    } catch {
      return [];
    }
  });
  const [question, setQuestion] = useState("");

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(qna));
  }, [qna]);

  function addQuestion() {
    if (!question.trim()) return;
    setQna([{ q: question.trim(), a: null, id: Date.now() }, ...qna]);
    setQuestion("");
  }

  function answerQuestion(id) {
    const ans = prompt("Enter an answer (demo):");
    if (!ans) return;
    setQna(qna.map(item => item.id === id ? { ...item, a: ans } : item));
  }

  return (
    <div className="qa-section">
      <h3>Customer Questions & Answers</h3>

      <div className="qa-form">
        <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Have a question? Ask here" />
        <button onClick={addQuestion}>Ask</button>
      </div>

      <div className="qa-list">
        {qna.length === 0 && <p className="muted">No questions yet. Be the first to ask!</p>}
        {qna.map(item => (
          <div key={item.id} className="qa-item">
            <div className="qa-q">Q: {item.q}</div>
            <div className="qa-a">{item.a ? `A: ${item.a}` : <em>No answer yet</em>}</div>
            <div className="qa-actions">
              {!item.a && <button onClick={() => answerQuestion(item.id)}>Answer (demo)</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
