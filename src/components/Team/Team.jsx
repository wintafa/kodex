import React, { useState } from 'react';
import './Team.css';

const Team = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const teamMembers = [
    {
      name: 'Александр Прозоров',
      position: 'Руководитель',
      description: 'Юрист с более чем 27-ми летним опытом юридической практики, имеет высшее юридическое образование московского ВУЗа.',
      image: 'team-alex.jpg'
    },
    {
      name: 'Рамиля Прозорова',
      position: 'Ведущий юрист',
      description: 'Рамиля Маратовна имеет не только Высшее юридическое образование московского ВУЗа, но и Высшее математическое.',
      image: 'team-ramilya.jpg'

    },
    {
      name: 'Дмитрий Масленников',
      position: 'Юрист',
      description: 'Самый педантичный и внимательный юрист. Имеет разносторонний опыт по юридической специальности.',
      image: 'maslennikov.jpg'
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="team-section">
      <div className="team-row">
      <h2 className="team-title">Команда Кодексъ</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <img src={member.image} alt={member.name} className="member-photo" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-position">{member.position}</p>
            <p className={`member-description ${expandedIndex === index ? 'expanded' : 'collapsed'}`}>
              {member.description}
            </p>
            <button className="read-more" onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? 'Свернуть' : 'Читать подробнее'}
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Team;


