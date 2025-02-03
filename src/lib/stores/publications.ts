import { writable } from 'svelte/store';

export const publications = writable([
  {
    title: 'NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis',
    authors: 'Ben Mildenhall, Pratul P. Srinivasan, Matthew Tancik, Jonathan T. Barron, Ravi Ramamoorthi, Ren Ng',
    description:
      'NeRF uses an 8-layer MLP with 256 hidden units per layer with positional encoding, skip connections, and separate branches for density and color. Skip connections are introduced at the 4th layer, and the output predicts color (r,g,b) and density σ. It models the scene as a function of 3D position and viewing direction. It approximate a continuous 5D scene representation with an MLP network.',
    venue: 'Arxiv Preprint',
    badges: [
      { label: 'Project Page', link: '#' },
      { label: 'arXiv', link: 'https://arxiv.org/abs/2003.08934' },
      { label: 'Code - Coming Soon', link: '#' },
      { label: 'Dataset - Coming Soon', link: '#' }
    ],
    image: '/pub/image1.png' // Pointing to /static/pub/image1.png
  },
  {
    title: 'Deep Linear Probe Generators for Weight Space Learning',
    authors: 'Jonathan Kahana, Eliahu Horwitz, Imri Shuval, Yedid Hoshen',
    description:
      'We conduct a study of weight space analysis methods and observe that probing is a promising approach for such tasks. We propose Deep Linear Probe Generators (ProbeGen), a shared generator module that introduces a structured inductive bias. ProbeGen significantly outperforms the state-of-the-art while being highly efficient.',
    venue: 'ICLR, 2025',
    badges: [
      { label: 'Project Page', link: '#' },
      { label: 'Code', link: '#' }
    ],
    image: '/pub/image2.png' // Pointing to /static/pub/image2.png
  }
]);
