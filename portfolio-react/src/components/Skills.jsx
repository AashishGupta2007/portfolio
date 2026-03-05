import React from "react"

/* ---------- SKILLS DATA ---------- */

const skills = [
  { name: "Python", level: 85 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "React + Tailwind", level: 70 },
  { name: "Machine Learning - Scikit-Learn", level: 72 },
  { name: "Data Structures", level: 82 },
  { name: "Git/Github", level: 70 },
  { name: "Problem Solving", level: 85 }
]

/* ---------- SKILL CARD ---------- */

function SkillCard({ skill, index }) {
  return (
    <div
      className="skill-card bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 group"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="flex justify-between mb-3">
        <h3 className="text-gray-200 font-semibold group-hover:text-green-400 transition">
          {skill.name}
        </h3>

        <span className="text-green-400 text-sm">
          {skill.level}%
        </span>
      </div>

      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

        <div
          className="progress-bar h-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-full"
          style={{ width: `${skill.level}%` }}
        />

      </div>
    </div>
  )
}

/* ---------- MAIN ---------- */

export default function Skills() {

  return (

<section
id="skills"
className="relative min-h-screen text-white px-6 py-24 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
>

{/* background glow */}

<div className="absolute w-[600px] h-[600px] bg-green-500/20 blur-[140px] rounded-full top-20 left-10 animate-float"></div>

<div className="absolute w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full bottom-20 right-10 animate-float-slow"></div>


<div className="max-w-6xl mx-auto relative z-10">

<h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-16 text-center animate-fade">
Skills
</h2>


<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

{skills.map((skill, i) => (
<SkillCard key={i} skill={skill} index={i} />
))}

</div>

</div>


<style>{`

/* card entrance */

.skill-card{
opacity:0;
transform:translateY(40px);
animation:cardFade 0.8s forwards;
}


/* progress animation (fixed) */

.progress-bar{
transform:scaleX(0);
transform-origin:left;
animation:progressGrow 1.5s ease forwards;
}


/* animations */

@keyframes cardFade{
to{
opacity:1;
transform:translateY(0);
}
}

@keyframes progressGrow{
to{
transform:scaleX(1);
}
}

@keyframes float{
0%{transform:translateY(0px)}
50%{transform:translateY(-40px)}
100%{transform:translateY(0px)}
}

@keyframes floatSlow{
0%{transform:translateY(0px)}
50%{transform:translateY(-25px)}
100%{transform:translateY(0px)}
}

.animate-float{
animation:float 8s ease-in-out infinite;
}

.animate-float-slow{
animation:floatSlow 12s ease-in-out infinite;
}

.animate-fade{
animation:fadeIn 1s ease forwards;
}

@keyframes fadeIn{
from{
opacity:0;
transform:translateY(-20px);
}
to{
opacity:1;
transform:translateY(0);
}
}


/* hover effect */

.skill-card:hover{
transform:translateY(-6px) scale(1.03);
border-color:#34d399;
box-shadow:0 10px 40px rgba(52,211,153,0.15);
transition:all .35s ease;
}

`}</style>

</section>

  )
}