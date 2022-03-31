import { VC } from "../types";

export function buildCredential(issuer: string, credSubject: Record<string, any>, recipient?: string) {
  return {
    credentialSubject: {
      id: recipient || issuer,
      ...credSubject,
    },
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "KudosCredential"],
    issuer: { id: issuer },
    issuanceDate: new Date().toISOString(),
  };
}

export async function signVc(vc: VC): Promise<VC> {
  console.log("calling stub signVc with", vc);
  return new Promise((res) => {
    setTimeout(() => res(vc), 1000);
  });
}

export function ellipsis(text: string, startLength: number, endLength: number): string {
  if (startLength + endLength + 2 >= text.length) {
    // +2 because there's reason to ellide something shorter than "..."
    return text;
  }
  return text.substr(0, startLength) + "..." + text.substr(text.length - endLength, text.length);
}

/** Finds where "0x" hex value starts and takes start length from there. */
export function hexEllipsis(text: string, startLength = 4, endLength = 4): string {
  const addressIndex = text.indexOf("0x") === -1 ? text.lastIndexOf(":") + 1 : text.indexOf("0x") + 2;
  return ellipsis(text, addressIndex + startLength, endLength);
}

export function truncateDid(did: string, maxCharCount = 20): string {
  const overMaxCount = did.length > maxCharCount;
  return did.includes("did:web") ? did : overMaxCount ? hexEllipsis(did) : did;
}

export function dateTimeFormat(date: Date): any {
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  const dateFormatted = ` ${month} ${day}, ${year}`;
  const timeFormatted = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric" }).format(date);
  return { dateFormatted, timeFormatted };
}

/** <input type="datetime-local"> element requires a nonstandard time format ("yyyy-MM-ddThh:mm"). This converts from ISO datetime string into that format.  */
export function isoToDatetimeLocal(isoString: string): string {
  const offset = new Date().getTimezoneOffset() * 1000 * 60;
  const offsetDate = new Date(isoString).valueOf() - offset;
  return new Date(offsetDate).toISOString().substring(0, 16);
}

/** Copy given string to clipboard. Returns true if successful, false if failed. */
export function copyToClipboard(text: string): boolean {
  const textArea = document.createElement("textarea");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (error) {
    console.error("Failed to copy text:", error);
    return false;
  }
  document.body.removeChild(textArea);
  return true;
}

export const EXAMPLE_CREDENTIAL: VC = {
  type: ["VerifiableCredential", "KudosCredential"],
  proof: {
    type: "EthereumEip712Signature2021",
    created: "2022-03-11T15:22:31.361Z",
    proofValue:
      "0xb5676936e1e0cdcc93a1a10a041376a91d360955654698c3cd35cf33cadc78e96b44c68ae17049a28d7478098f4c2f33c98aec6f0d4ccbcc8add2614b69d211e1b",
    eip712Domain: {
      domain: {
        name: "DiscoVerifiableCredential",
        chainId: 1,
        version: "1",
      },
      primaryType: "VerifiableCredential",
      messageSchema: {
        Proof: [
          {
            name: "created",
            type: "string",
          },
          {
            name: "proofPurpose",
            type: "string",
          },
          {
            name: "type",
            type: "string",
          },
          {
            name: "verificationMethod",
            type: "string",
          },
        ],
        Issuer: [
          {
            name: "id",
            type: "string",
          },
        ],
        EIP712Domain: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "version",
            type: "string",
          },
          {
            name: "chainId",
            type: "uint256",
          },
        ],
        CredentialSubject: [
          {
            name: "baz",
            type: "uint256",
          },
          {
            name: "foo",
            type: "string",
          },
          {
            name: "id",
            type: "string",
          },
          {
            name: "testString",
            type: "string",
          },
        ],
        VerifiableCredential: [
          {
            name: "@context",
            type: "string[]",
          },
          {
            name: "credentialSubject",
            type: "CredentialSubject",
          },
          {
            name: "issuanceDate",
            type: "string",
          },
          {
            name: "issuer",
            type: "Issuer",
          },
          {
            name: "proof",
            type: "Proof",
          },
          {
            name: "type",
            type: "string[]",
          },
        ],
      },
    },
    proofPurpose: "assertionMethod",
    verificationMethod: "did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw#controller",
  },
  issuer: {
    id: "did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw",
  },
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  issuanceDate: "2022-03-11T15:19:53.418Z",
  credentialSubject: {
    id: "did:ethr:0x8563388a129510F7c6ea2C6755E66a8937587b1d",
    kudos: "Thanks for working on this exercise!",
  },
};
