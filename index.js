var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const basePath = 'api.openweathermap.org/data/2.5/weather?';
function getWeather(apiKey, zip, units = 'imperial') {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `${basePath}zip=${zip}&appid=${apiKey}&units=${units}`;
        const res = yield fetch(path);
        return yield res.json();
    });
}
function getWeatherByCityName(apiKey, city, units = 'imperial') {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `${basePath}q=${city}&appid=${apiKey}&units=${units}`;
        const res = yield fetch(path);
        return yield res.json();
    });
}
function getWeatherByCityID(apiKey, city, units = 'imperial') {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `${basePath}id=${city}&appid=${apiKey}&units=${units}`;
        const res = yield fetch(path);
        return yield res.json();
    });
}
function getWeatherByGeo(apiKey, geo, units = 'imperial') {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `${basePath}lat=${geo.lat}&lon=${geo.lon}&appid=${apiKey}&units=${units}`;
        const res = yield fetch(path);
        return yield res.json();
    });
}
