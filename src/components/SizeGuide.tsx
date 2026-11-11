import { sizeGuide } from "@/data/content";

export function SizeGuide() {
  return (
    <div className="overflow-x-auto rounded-3xl bg-white px-4 py-2 sm:px-6">
      <table className="w-full min-w-[320px] border-collapse text-left text-[15px] sm:text-base">
        <caption className="sr-only">Uşağın boyuna görə masa və stul hündürlüyü, mm</caption>
        <thead>
          <tr className="border-b-2 border-ink">
            <th scope="col" className="py-3 pr-2">Mövqe</th>
            <th scope="col" className="py-3 pr-2">Yaş</th>
            <th scope="col" className="py-3 pr-2">Boy</th>
            <th scope="col" className="py-3 pr-2 text-right">Masa</th>
            <th scope="col" className="py-3 text-right">Stul</th>
          </tr>
        </thead>
        <tbody>
          {sizeGuide.map((r) => (
            <tr key={r.position} className="border-b border-line last:border-0">
              <td className="py-3 pr-2 font-bold">{r.position}</td>
              <td className="py-3 pr-2">{r.age}</td>
              <td className="py-3 pr-2 whitespace-nowrap">{r.height}</td>
              <td className="py-3 pr-2 text-right">{r.desk}</td>
              <td className="py-3 text-right">{r.chair}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
