const MOCK_URL_RESULT = [
  {
    id: "1ab2c3",
    request_url: "https://google.com",
    result_url: "https://cleanuri.com/docs",
  },
  {
    id: "2bc3d4",
    request_url: "https://globo.com/",
    result_url: "https://portocanal.sapo.pt/",
  },
];
export function UrlList() {
  return (
    <ul>
      {MOCK_URL_RESULT.map((result) => (
        <li key={result.id}>
          <p>{result.request_url}</p>
          <p>{result.result_url}</p>
          <button>Copy</button>
        </li>
      ))}
    </ul>
  );
}
