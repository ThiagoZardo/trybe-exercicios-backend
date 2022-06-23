const { expect } = require('chai');
const readFile = require('../readFile');
const fs = require('fs');
const sinon = require('sinon');

const CONTEUDO_DO_ARQUIVO = "VQV com TDD";

describe('Ler um arquivo', () => {
  describe('Arquivo lido com sucesso', () => {
    before(() => {
      sinon
      .stub(fs, 'readFile')
      .returns(CONTEUDO_DO_ARQUIVO);
    });

    after(() => {
      fs.readFile.restore();
    });

    describe('A saída', () => {
      it('é uma string', () => {
        const output = readFile('arquivo.txt');
        expect(output).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const output = readFile('arquivo.txt');
        expect(output).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Erro na leitura', () => {
    describe('A Saída', () => {
      it('É "nula"', () => {
        const output = readFile('arquivo_que_nao_existe.txt');
        expect(output).to.be.equal(null);
      });
    });
  });
});