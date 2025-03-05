export default function CharacterCard(data) {
  const characterName = data.name;
  const characterEpisode = data.firstEpisode;
  const characterAge = data.age;
  const characterOccupation = data.occupation;
  const characterVoice = data.voicedBy;
  const characterImageSrc = data.image;

  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card");
  cardListItem.innerHTML = `<div class="card__image-container">
            <img class="card__image" src="${characterImageSrc}" alt="${characterName}" />
          </div>
          <div class="card__content">
            <h2 class="card__title">${characterName}</h2>
            <dl class="card__info">
                <dt class="card__info-title">First Episode</dt>
                <dd class="card__info-description">${characterEpisode}</dd>
                <dt class="card__info-title">Age</dt>
                <dd class="card__info-description">${characterAge === undefined ? "" : characterAge}</dd>
                <dt class="card__info-title">Occupation</dt>
                <dd class="card__info-description">${characterOccupation}</dd>
                <dt class="card__info-title">Voiced by</dt>
                <dd class="card__info-description">${characterVoice}</dd>
            </dl>
          </div>`;
  return cardListItem;
}
