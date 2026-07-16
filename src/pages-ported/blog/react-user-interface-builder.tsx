"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

const HELLO = `function HelloWorld({ name }) {
  return <div>Hello, {name}!</div>;
}

// <HelloWorld name="Taylor" /> renders "Hello, Taylor!"`;

const TOGGLE = `// Web
function ToggleButton({ isOn, onToggle }) {
  return <button onClick={onToggle}>{isOn ? "ON" : "OFF"}</button>;
}

// React Native (same logic, different UI primitives)
function ToggleButton({ isOn, onToggle }) {
  return (
    <Pressable onPress={onToggle}>
      <Text>{isOn ? "ON" : "OFF"}</Text>
    </Pressable>
  );
}`;

const PROFILE = `function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img src={user.avatarUrl} alt={\`\${user.name}'s avatar\`} />
      <h2>{user.name}</h2>
      <p>Joined {new Date(user.joinDate).toLocaleDateString()}</p>
    </div>
  );
}`;

const NAVBAR = `// JSX version
function NavBar({ items }) {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ...compiles to React.createElement calls
React.createElement(
  'nav',
  null,
  React.createElement(
    'ul',
    null,
    items.map((item) =>
      React.createElement(
        'li',
        { key: item.href },
        React.createElement('a', { href: item.href }, item.label),
      ),
    ),
  ),
);`;

const LIKE = `function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked((prev) => !prev)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}`;

const APP = `function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) =>
    setTodos([...todos, { id: Date.now(), text }]);

  return (
    <div>
      <TodoInput onAdd={addTodo} />   {/* handler via props */}
      <TodoList todos={todos} />      {/* data via props */}
    </div>
  );
}`;

const COUNTER = `import { createRoot } from 'react-dom/client';

function Counter({ initial }) {
  const [count, setCount] = useState(initial);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}

const node = document.getElementById('widget');
const data = JSON.parse(node.getAttribute('data-initial'));
createRoot(node).render(<Counter initial={data.count} />);`;

function Code({ children }: { children: string }) {
  return (
    <pre className="bg-[#0d0d0d] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed my-6">
      <code className="text-white/85 font-mono">{children}</code>
    </pre>
  );
}

export default function ReactUIBuilderPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "React: A User Interface Builder for the Modern Web",
    "description":
      "A grounded 2026 guide to React: components, JSX, the virtual DOM, state, props and hooks, unidirectional data flow, React Native, server rendering and Server Components, and how to learn it.",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-07-16T11:00:00+00:00",
    "dateModified": "2026-07-16T11:00:00+00:00",
    "author": {
      "@type": "Person",
      "name": "Marc Friedman",
      "url": "https://www.marcfriedmanportfolio.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marc Friedman Design & Development",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.marcfriedmanportfolio.com/apple-touch-icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.marcfriedmanportfolio.com/blog/react-user-interface-builder"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push('/blog')}
            className="flex items-center gap-2 text-[#A3D1FF] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            React: A User Interface Builder for the Modern Web
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>July 16, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=2000&q=80"
              alt="React source code on a screen, the library used to build interactive user interfaces for the web"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p>React has shaped how developers build interactive UIs for over a decade. Whether this is your first look or you&rsquo;re weighing it up for your stack, this guide covers the ground, from the basics through to native apps and server-side rendering, grounded in where the library actually is today.</p>

            <h2>What React is, and why it still matters in 2026</h2>
            <p>React is a JavaScript library for building user interfaces. It was born at Facebook in 2013 and is now maintained by Meta alongside a large open-source community. Its job is narrow on purpose: build UIs and manage component state. Routing, data fetching, styling, and build tooling come from separate libraries, React deliberately doesn&rsquo;t prescribe a full architecture.</p>
            <p>You&rsquo;ll find it in products from Meta (Facebook, Instagram), Netflix, Airbnb, and WhatsApp Web, and it&rsquo;s a staple of job postings, especially paired with TypeScript or Next.js. A few terms you&rsquo;ll meet along the way:</p>
            <ul>
              <li><strong>Components</strong> — reusable pieces of UI logic and markup you compose to build an app.</li>
              <li><strong>JSX</strong> — a syntax extension that lets you write HTML-like markup directly inside JavaScript.</li>
              <li><strong>Virtual DOM</strong> — React computes the minimal set of updates needed, rather than re-rendering everything.</li>
              <li><strong>Hooks</strong> — functions like <code>useState</code> and <code>useEffect</code> that add state and behavior to function components.</li>
              <li><strong>Learn once, write anywhere</strong> — the same model powers web, mobile, and server rendering.</li>
            </ul>
            <Code>{HELLO}</Code>
            <p>That tiny greeting component is a first taste of JSX, props, and the function-component form.</p>

            <h2>Core ideas: declarative, component-based, learn once write anywhere</h2>
            <p>React lets you build UIs <strong>declaratively</strong>: you describe what each state should look like, and React works out the minimal DOM operations when the data changes. That&rsquo;s far easier to reason about than telling the browser how to mutate the DOM step by step.</p>
            <p>It&rsquo;s also <strong>component-based</strong>. You build small, encapsulated components and compose them into complex UIs, a world away from jQuery or vanilla JS, where DOM manipulation gets tangled as an app grows.</p>
            <p>And the same model runs beyond the web. With React Native, the same patterns, components, hooks, unidirectional data flow, apply across platforms:</p>
            <Code>{TOGGLE}</Code>
            <p>The component logic is identical; only the UI primitives differ.</p>

            <h2>Components: from functions to large UI trees</h2>
            <p>React components are just JavaScript functions that return JSX describing part of the UI. Today, function components are the norm. Class components used lifecycle methods for state; hooks have replaced most of those patterns since function components gained them in React 16.8.</p>
            <Code>{PROFILE}</Code>
            <p>Components compose. A video page might combine a Thumbnail, VideoPlayer, CommentsList, and LikeButton, each fed data through props. You build them with ordinary functions, loops, and conditionals, no separate template language, and they manage their own state. Keeping data inside components instead of scattering it across the DOM makes a UI far more predictable to build and debug.</p>

            <h2>JSX and the role of JavaScript</h2>
            <p>JSX is an optional syntax extension that lets you write markup close to HTML inside JavaScript. It compiles to plain JS, Babel, TypeScript, or the React compiler handle it at build time:</p>
            <Code>{NAVBAR}</Code>
            <p>Inside JSX you can drop in almost any JavaScript expression, map over arrays, branch with a ternary, or call a helper. Bundlers like Vite and Next.js process JSX for you. A good habit: keep JSX in small chunks and split larger blocks into their own components so the codebase stays readable.</p>

            <h2>State, props, and hooks</h2>
            <p><strong>Props</strong> are the read-only inputs a parent passes to a child, <code>&lt;Button label="Save" /&gt;</code> passes <code>"Save"</code> into the <code>label</code> prop. Don&rsquo;t mutate props; treat them as data handed down. When a child needs to talk back, it does so through event handlers passed in as props.</p>
            <p><strong>State</strong> is data that changes over time: whether a dropdown is open, what&rsquo;s in a cart, what a user typed. When state changes, React efficiently updates just the components that depend on it, via the virtual DOM. The hooks you&rsquo;ll reach for most:</p>
            <ul>
              <li><strong>useState</strong> — declares a state variable and a setter.</li>
              <li><strong>useEffect</strong> — runs side effects after render (API calls, subscriptions, event listeners).</li>
              <li><strong>useContext</strong> — reads shared state without prop-drilling.</li>
              <li><strong>useReducer</strong> — manages more complex state transitions, Redux-reducer style.</li>
              <li><strong>useRef</strong> — references DOM nodes or holds mutable values across renders.</li>
            </ul>
            <Code>{LIKE}</Code>
            <p>A few lines of state, an event handler, and declarative markup, and you have a genuinely interactive UI.</p>

            <h2>Building real apps: data down, actions up</h2>
            <p>A todo app is just components working together. Data flows one direction, from parent down to child. The root component usually holds the state and passes handlers down: <em>props flow down, actions flow up</em>. That&rsquo;s the pattern that makes React predictable.</p>
            <Code>{APP}</Code>
            <p>React handles event delegation for you, so you don&rsquo;t worry about whether a click bubbles to the right component; you write handlers as normal, because it&rsquo;s just JavaScript. This unidirectional flow (the same idea Flux formalized, actions through a dispatcher to a store) is what makes features, debugging, and isolated testing easier than in frameworks with two-way parent/child chatter. It&rsquo;s also how React powers single-page apps that update without full reloads.</p>

            <h2>React beyond the browser: native, SSR, and Server Components</h2>
            <p><strong>React Native</strong> renders to real native UI components on Android and iOS. Around since February 2015, it maps a <code>&lt;Text /&gt;</code> or <code>&lt;Button /&gt;</code> to the actual platform widget, so you get a native feel rather than a WebView wrapper, while writing JavaScript and integrating any native library or SDK.</p>
            <p>On the server, React supports <strong>server-side rendering</strong> for a faster first paint and better SEO. Next.js and Remix render components on the server into HTML the client hydrates. And since React 19, <strong>Server Components</strong> let certain components run only on the server, cutting the JavaScript shipped to the browser.</p>
            <p>React isn&rsquo;t limited to HTML either: the same patterns and hooks power canvas rendering (React Three Fiber), terminal UIs (Ink), and AR/VR.</p>

            <h2>Learning React in 2026, the right way</h2>
            <p>Before diving in, get comfortable with a couple of fundamentals:</p>
            <ul>
              <li>Modern JavaScript (ES6+): <code>let</code>/<code>const</code>, arrow functions, destructuring, modules, promises, and async/await.</li>
              <li>A working grasp of HTML and CSS for layout and styling.</li>
            </ul>
            <p>Then a practical path:</p>
            <ol>
              <li>Start with the official React Quick Start guide to get running with the basics.</li>
              <li>Build something small, a counter, a search box that fetches GitHub users, an expense tracker.</li>
              <li>Experiment in a sandbox (CodeSandbox, StackBlitz) or set up a local project with <code>npm create vite@latest</code>.</li>
              <li>As it grows, add routing, forms, API calls, and persistent storage.</li>
            </ol>
            <p>Master hooks early, especially <code>useState</code> and <code>useEffect</code>, and skip old class-component tutorials. Don&rsquo;t reach for Redux or MobX on day one; core React patterns carry you a long way. Build things you actually care about (a reading list, a recipe app) and you&rsquo;ll stick with it.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <p className="text-gray-300 mb-0">Don&rsquo;t chase every new release. Learn the current version (19.x) and the features that matter, Server Components and <code>useActionState</code>, and adopt what you actually need rather than rewriting your codebase for each trend.</p>
            </div>

            <h2>Adding React to an existing project</h2>
            <p>You don&rsquo;t have to start from scratch. React drops into a legacy server-rendered app (Rails, Django, Laravel) cleanly: mount a React root onto specific DOM nodes and render interactive widgets without rewriting existing code.</p>
            <Code>{COUNTER}</Code>
            <p>Your server renders a placeholder with initial data, and React takes over the interactivity, an easy way to add dynamic pieces without touching the rest. React also plays well with the wider ecosystem, React Router, Redux, form and data-fetching libraries, and tools like D3 for visualization while React manages component structure. Most modern starters default to TypeScript for better type safety.</p>

            <h2>Where React is heading, and how to keep up</h2>
            <p>The team keeps shipping: concurrent rendering, Suspense, Server Components, tested on Meta&rsquo;s own large apps before wider release. To stay current, follow the official React blog, GitHub release notes, and the docs for Next.js, Remix, and Expo, plus meetups and community forums.</p>
            <p>The best part: the core principles, components written in JavaScript, declarative views, unidirectional data flow, stay stable even as the library evolves. Learn those well, build something real, and you&rsquo;ll be fine.</p>
          </div>

          {/* Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Building something in React?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Custom React &amp; Next.js sites and apps, fast, accessible, and built to convert. Tell me what you&rsquo;re working on.
            </p>
            <ContactForm />
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/qcvroy8xpd/8ce5c50b-8af1-4e99-b2b0-f7f29cd0abd3.avif"
                    alt="CSS Is Eating JavaScript's Lunch"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">CSS Is Eating JavaScript&rsquo;s Lunch</h4>
                  <p className="text-white text-sm mb-4">Scroll-driven animations, :has(), and @starting-style are replacing chunks of UI JavaScript.</p>
                  <button
                    onClick={() => router.push('/blog/css-eating-javascript-lunch')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80"
                    alt="Best Next.js Developers for B2B & Service Businesses"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Best Next.js Developers (2026)</h4>
                  <p className="text-white text-sm mb-4">Where React meets production: choosing a Next.js partner for B2B and service businesses.</p>
                  <button
                    onClick={() => router.push('/blog/best-nextjs-developers-b2b-service-businesses-2026')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
