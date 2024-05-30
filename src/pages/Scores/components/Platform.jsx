import Htext from "./components/Htext";

const Platform = (props) => {

    const platforms = [
        {'name': 'INTERVAL-trained scores', 'version': 'Olink Target', 'href':'/Scores/Olink/INTERVAL'},
        {'name': 'UKB European-trained scores', 'version': 'Olink Explore', 'href':'/Scores/Olink/UKB_EUR'},
        {'name': 'UKB Multi-ancestry participants-trained scores', 'version': 'Olink Explore', 'href':'/Scores/Olink/UKB_MULTI'}
    ]

    const get_platform_data = () => {
        if (props.platform === 'Olink') {
            return (
                <>
                    { platforms.map((platform) =>
                        <div className="mt-3">- <a href={platform.href} className="text-indigo-600">{platform.name}</a><small className="pl-2">({platform.version})</small></div>
                    )}
                </>
            )
        }
    }

    return (
      <>
        <div className="h-auto max-w-full pb-10 lg:px-32 pr-3 md:pr-10 ">
            <Htext text={props.platform+' training cohorts'} />
            <div className="w-auto lg:w-[80%] pr-10 pl-5 md:pl-10">
                <p className="my-2">Please select the set of scores trained using different data sources:</p>
                <div className="w-auto">
                    {get_platform_data()}
                </div>
            </div>
        </div>
      </>
    )
}
export default Platform;
