# `dataDatabricksFunctions` Submodule <a name="`dataDatabricksFunctions` Submodule" id="@cdktf/provider-databricks.dataDatabricksFunctions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFunctions <a name="DataDatabricksFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions databricks_functions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctions(scope: Construct, id: string, config: DataDatabricksFunctionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig">DataDatabricksFunctionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig">DataDatabricksFunctionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions">putFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetFunctions">resetFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetIncludeBrowse">resetIncludeBrowse</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFunctions` <a name="putFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions"></a>

```typescript
public putFunctions(value: IResolvable | DataDatabricksFunctionsFunctions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>[]

---

##### `resetFunctions` <a name="resetFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetFunctions"></a>

```typescript
public resetFunctions(): void
```

##### `resetIncludeBrowse` <a name="resetIncludeBrowse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetIncludeBrowse"></a>

```typescript
public resetIncludeBrowse(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksFunctions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

dataDatabricksFunctions.DataDatabricksFunctions.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksFunctions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksFunctions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksFunctions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksFunctions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList">DataDatabricksFunctionsFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functionsInput">functionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowseInput">includeBrowseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowse">includeBrowse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functions"></a>

```typescript
public readonly functions: DataDatabricksFunctionsFunctionsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList">DataDatabricksFunctionsFunctionsList</a>

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functionsInput"></a>

```typescript
public readonly functionsInput: IResolvable | DataDatabricksFunctionsFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>[]

---

##### `includeBrowseInput`<sup>Optional</sup> <a name="includeBrowseInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowseInput"></a>

```typescript
public readonly includeBrowseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `includeBrowse`<sup>Required</sup> <a name="includeBrowse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowse"></a>

```typescript
public readonly includeBrowse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFunctionsConfig <a name="DataDatabricksFunctionsConfig" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsConfig: dataDatabricksFunctions.DataDatabricksFunctionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.functions">functions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#functions DataDatabricksFunctions#functions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.includeBrowse">includeBrowse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}.

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.functions"></a>

```typescript
public readonly functions: IResolvable | DataDatabricksFunctionsFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#functions DataDatabricksFunctions#functions}.

---

##### `includeBrowse`<sup>Optional</sup> <a name="includeBrowse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.includeBrowse"></a>

```typescript
public readonly includeBrowse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}.

---

### DataDatabricksFunctionsFunctions <a name="DataDatabricksFunctionsFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctions: dataDatabricksFunctions.DataDatabricksFunctionsFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#browse_only DataDatabricksFunctions#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdAt">createdAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#created_at DataDatabricksFunctions#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdBy">createdBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#created_by DataDatabricksFunctions#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#data_type DataDatabricksFunctions#data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalLanguage">externalLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#external_language DataDatabricksFunctions#external_language}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalName">externalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#external_name DataDatabricksFunctions#external_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullDataType">fullDataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#full_data_type DataDatabricksFunctions#full_data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#full_name DataDatabricksFunctions#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.functionId">functionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#function_id DataDatabricksFunctions#function_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.inputParams">inputParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#input_params DataDatabricksFunctions#input_params}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isDeterministic">isDeterministic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#is_deterministic DataDatabricksFunctions#is_deterministic}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isNullCall">isNullCall</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#is_null_call DataDatabricksFunctions#is_null_call}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#metastore_id DataDatabricksFunctions#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#owner DataDatabricksFunctions#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.parameterStyle">parameterStyle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_style DataDatabricksFunctions#parameter_style}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.properties">properties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#properties DataDatabricksFunctions#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.returnParams">returnParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#return_params DataDatabricksFunctions#return_params}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineBody">routineBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#routine_body DataDatabricksFunctions#routine_body}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDefinition">routineDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#routine_definition DataDatabricksFunctions#routine_definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDependencies">routineDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#routine_dependencies DataDatabricksFunctions#routine_dependencies}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.securityType">securityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#security_type DataDatabricksFunctions#security_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.specificName">specificName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#specific_name DataDatabricksFunctions#specific_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlDataAccess">sqlDataAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#sql_data_access DataDatabricksFunctions#sql_data_access}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlPath">sqlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#sql_path DataDatabricksFunctions#sql_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedAt">updatedAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#updated_at DataDatabricksFunctions#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedBy">updatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#updated_by DataDatabricksFunctions#updated_by}. |

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#browse_only DataDatabricksFunctions#browse_only}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#created_at DataDatabricksFunctions#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#created_by DataDatabricksFunctions#created_by}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#data_type DataDatabricksFunctions#data_type}.

---

##### `externalLanguage`<sup>Optional</sup> <a name="externalLanguage" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalLanguage"></a>

```typescript
public readonly externalLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#external_language DataDatabricksFunctions#external_language}.

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalName"></a>

```typescript
public readonly externalName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#external_name DataDatabricksFunctions#external_name}.

---

##### `fullDataType`<sup>Optional</sup> <a name="fullDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullDataType"></a>

```typescript
public readonly fullDataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#full_data_type DataDatabricksFunctions#full_data_type}.

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#full_name DataDatabricksFunctions#full_name}.

---

##### `functionId`<sup>Optional</sup> <a name="functionId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#function_id DataDatabricksFunctions#function_id}.

---

##### `inputParams`<sup>Optional</sup> <a name="inputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.inputParams"></a>

```typescript
public readonly inputParams: DataDatabricksFunctionsFunctionsInputParams;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#input_params DataDatabricksFunctions#input_params}.

---

##### `isDeterministic`<sup>Optional</sup> <a name="isDeterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isDeterministic"></a>

```typescript
public readonly isDeterministic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#is_deterministic DataDatabricksFunctions#is_deterministic}.

---

##### `isNullCall`<sup>Optional</sup> <a name="isNullCall" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isNullCall"></a>

```typescript
public readonly isNullCall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#is_null_call DataDatabricksFunctions#is_null_call}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#metastore_id DataDatabricksFunctions#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#owner DataDatabricksFunctions#owner}.

---

##### `parameterStyle`<sup>Optional</sup> <a name="parameterStyle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.parameterStyle"></a>

```typescript
public readonly parameterStyle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_style DataDatabricksFunctions#parameter_style}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#properties DataDatabricksFunctions#properties}.

---

##### `returnParams`<sup>Optional</sup> <a name="returnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.returnParams"></a>

```typescript
public readonly returnParams: DataDatabricksFunctionsFunctionsReturnParams;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#return_params DataDatabricksFunctions#return_params}.

---

##### `routineBody`<sup>Optional</sup> <a name="routineBody" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineBody"></a>

```typescript
public readonly routineBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#routine_body DataDatabricksFunctions#routine_body}.

---

##### `routineDefinition`<sup>Optional</sup> <a name="routineDefinition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDefinition"></a>

```typescript
public readonly routineDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#routine_definition DataDatabricksFunctions#routine_definition}.

---

##### `routineDependencies`<sup>Optional</sup> <a name="routineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDependencies"></a>

```typescript
public readonly routineDependencies: DataDatabricksFunctionsFunctionsRoutineDependencies;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#routine_dependencies DataDatabricksFunctions#routine_dependencies}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}.

---

##### `securityType`<sup>Optional</sup> <a name="securityType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.securityType"></a>

```typescript
public readonly securityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#security_type DataDatabricksFunctions#security_type}.

---

##### `specificName`<sup>Optional</sup> <a name="specificName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.specificName"></a>

```typescript
public readonly specificName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#specific_name DataDatabricksFunctions#specific_name}.

---

##### `sqlDataAccess`<sup>Optional</sup> <a name="sqlDataAccess" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlDataAccess"></a>

```typescript
public readonly sqlDataAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#sql_data_access DataDatabricksFunctions#sql_data_access}.

---

##### `sqlPath`<sup>Optional</sup> <a name="sqlPath" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlPath"></a>

```typescript
public readonly sqlPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#sql_path DataDatabricksFunctions#sql_path}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#updated_at DataDatabricksFunctions#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#updated_by DataDatabricksFunctions#updated_by}.

---

### DataDatabricksFunctionsFunctionsInputParams <a name="DataDatabricksFunctionsFunctionsInputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctionsInputParams: dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.property.parameters">parameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | DataDatabricksFunctionsFunctionsInputParamsParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}.

---

### DataDatabricksFunctionsFunctionsInputParamsParameters <a name="DataDatabricksFunctionsFunctionsInputParamsParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctionsInputParamsParameters: dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#position DataDatabricksFunctions#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeText">typeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterDefault">parameterDefault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterMode">parameterMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterType">parameterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeIntervalType">typeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeJson">typeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typePrecision">typePrecision</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeScale">typeScale</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#position DataDatabricksFunctions#position}.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}.

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeText"></a>

```typescript
public readonly typeText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `parameterDefault`<sup>Optional</sup> <a name="parameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterDefault"></a>

```typescript
public readonly parameterDefault: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}.

---

##### `parameterMode`<sup>Optional</sup> <a name="parameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterMode"></a>

```typescript
public readonly parameterMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}.

---

##### `parameterType`<sup>Optional</sup> <a name="parameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterType"></a>

```typescript
public readonly parameterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeIntervalType"></a>

```typescript
public readonly typeIntervalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeJson"></a>

```typescript
public readonly typeJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typePrecision"></a>

```typescript
public readonly typePrecision: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeScale"></a>

```typescript
public readonly typeScale: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}.

---

### DataDatabricksFunctionsFunctionsReturnParams <a name="DataDatabricksFunctionsFunctionsReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctionsReturnParams: dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.property.parameters">parameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | DataDatabricksFunctionsFunctionsReturnParamsParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}.

---

### DataDatabricksFunctionsFunctionsReturnParamsParameters <a name="DataDatabricksFunctionsFunctionsReturnParamsParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctionsReturnParamsParameters: dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#position DataDatabricksFunctions#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeText">typeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterDefault">parameterDefault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterMode">parameterMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterType">parameterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeIntervalType">typeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeJson">typeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typePrecision">typePrecision</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeScale">typeScale</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#position DataDatabricksFunctions#position}.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}.

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeText"></a>

```typescript
public readonly typeText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `parameterDefault`<sup>Optional</sup> <a name="parameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterDefault"></a>

```typescript
public readonly parameterDefault: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}.

---

##### `parameterMode`<sup>Optional</sup> <a name="parameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterMode"></a>

```typescript
public readonly parameterMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}.

---

##### `parameterType`<sup>Optional</sup> <a name="parameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterType"></a>

```typescript
public readonly parameterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeIntervalType"></a>

```typescript
public readonly typeIntervalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeJson"></a>

```typescript
public readonly typeJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typePrecision"></a>

```typescript
public readonly typePrecision: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeScale"></a>

```typescript
public readonly typeScale: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}.

---

### DataDatabricksFunctionsFunctionsRoutineDependencies <a name="DataDatabricksFunctionsFunctionsRoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctionsRoutineDependencies: dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.property.dependencies">dependencies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#dependencies DataDatabricksFunctions#dependencies}. |

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.property.dependencies"></a>

```typescript
public readonly dependencies: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#dependencies DataDatabricksFunctions#dependencies}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctionsRoutineDependenciesDependencies: dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.connection">connection</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#connection DataDatabricksFunctions#connection}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#credential DataDatabricksFunctions#credential}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#function DataDatabricksFunctions#function}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#table DataDatabricksFunctions#table}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.connection"></a>

```typescript
public readonly connection: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#connection DataDatabricksFunctions#connection}.

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.credential"></a>

```typescript
public readonly credential: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#credential DataDatabricksFunctions#credential}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.function"></a>

```typescript
public readonly function: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#function DataDatabricksFunctions#function}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.table"></a>

```typescript
public readonly table: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#table DataDatabricksFunctions#table}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection: dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#connection_name DataDatabricksFunctions#connection_name}. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#connection_name DataDatabricksFunctions#connection_name}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential: dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential.property.credentialName">credentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#credential_name DataDatabricksFunctions#credential_name}. |

---

##### `credentialName`<sup>Optional</sup> <a name="credentialName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#credential_name DataDatabricksFunctions#credential_name}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction: dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.property.functionFullName">functionFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#function_full_name DataDatabricksFunctions#function_full_name}. |

---

##### `functionFullName`<sup>Required</sup> <a name="functionFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.property.functionFullName"></a>

```typescript
public readonly functionFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#function_full_name DataDatabricksFunctions#function_full_name}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

const dataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable: dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.property.tableFullName">tableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#table_full_name DataDatabricksFunctions#table_full_name}. |

---

##### `tableFullName`<sup>Required</sup> <a name="tableFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.property.tableFullName"></a>

```typescript
public readonly tableFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/functions#table_full_name DataDatabricksFunctions#table_full_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFunctionsFunctionsInputParamsOutputReference <a name="DataDatabricksFunctionsFunctionsInputParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | DataDatabricksFunctionsFunctionsInputParamsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>[]

---

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList">DataDatabricksFunctionsFunctionsInputParamsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataDatabricksFunctionsFunctionsInputParamsParametersList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList">DataDatabricksFunctionsFunctionsInputParamsParametersList</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DataDatabricksFunctionsFunctionsInputParamsParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsInputParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>

---


### DataDatabricksFunctionsFunctionsInputParamsParametersList <a name="DataDatabricksFunctionsFunctionsInputParamsParametersList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get"></a>

```typescript
public get(index: number): DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsInputParamsParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>[]

---


### DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference <a name="DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterDefault">resetParameterDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterMode">resetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterType">resetParameterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetParameterDefault` <a name="resetParameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterDefault"></a>

```typescript
public resetParameterDefault(): void
```

##### `resetParameterMode` <a name="resetParameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterMode"></a>

```typescript
public resetParameterMode(): void
```

##### `resetParameterType` <a name="resetParameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterType"></a>

```typescript
public resetParameterType(): void
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeIntervalType"></a>

```typescript
public resetTypeIntervalType(): void
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeJson"></a>

```typescript
public resetTypeJson(): void
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypePrecision"></a>

```typescript
public resetTypePrecision(): void
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeScale"></a>

```typescript
public resetTypeScale(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefaultInput">parameterDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterModeInput">parameterModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterTypeInput">parameterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefault">parameterDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterMode">parameterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterType">parameterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJson">typeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecision">typePrecision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScale">typeScale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeText">typeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterDefaultInput`<sup>Optional</sup> <a name="parameterDefaultInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefaultInput"></a>

```typescript
public readonly parameterDefaultInput: string;
```

- *Type:* string

---

##### `parameterModeInput`<sup>Optional</sup> <a name="parameterModeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterModeInput"></a>

```typescript
public readonly parameterModeInput: string;
```

- *Type:* string

---

##### `parameterTypeInput`<sup>Optional</sup> <a name="parameterTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterTypeInput"></a>

```typescript
public readonly parameterTypeInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalTypeInput"></a>

```typescript
public readonly typeIntervalTypeInput: string;
```

- *Type:* string

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJsonInput"></a>

```typescript
public readonly typeJsonInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecisionInput"></a>

```typescript
public readonly typePrecisionInput: number;
```

- *Type:* number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScaleInput"></a>

```typescript
public readonly typeScaleInput: number;
```

- *Type:* number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeTextInput"></a>

```typescript
public readonly typeTextInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameterDefault`<sup>Required</sup> <a name="parameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefault"></a>

```typescript
public readonly parameterDefault: string;
```

- *Type:* string

---

##### `parameterMode`<sup>Required</sup> <a name="parameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterMode"></a>

```typescript
public readonly parameterMode: string;
```

- *Type:* string

---

##### `parameterType`<sup>Required</sup> <a name="parameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterType"></a>

```typescript
public readonly parameterType: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalType"></a>

```typescript
public readonly typeIntervalType: string;
```

- *Type:* string

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJson"></a>

```typescript
public readonly typeJson: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecision"></a>

```typescript
public readonly typePrecision: number;
```

- *Type:* number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScale"></a>

```typescript
public readonly typeScale: number;
```

- *Type:* number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeText"></a>

```typescript
public readonly typeText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsInputParamsParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>

---


### DataDatabricksFunctionsFunctionsList <a name="DataDatabricksFunctionsFunctionsList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get"></a>

```typescript
public get(index: number): DataDatabricksFunctionsFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>[]

---


### DataDatabricksFunctionsFunctionsOutputReference <a name="DataDatabricksFunctionsFunctionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams">putInputParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams">putReturnParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies">putRoutineDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalLanguage">resetExternalLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalName">resetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullDataType">resetFullDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFunctionId">resetFunctionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetInputParams">resetInputParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsDeterministic">resetIsDeterministic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsNullCall">resetIsNullCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetParameterStyle">resetParameterStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetReturnParams">resetReturnParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineBody">resetRoutineBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDefinition">resetRoutineDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDependencies">resetRoutineDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSecurityType">resetSecurityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSpecificName">resetSpecificName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlDataAccess">resetSqlDataAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlPath">resetSqlPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputParams` <a name="putInputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams"></a>

```typescript
public putInputParams(value: DataDatabricksFunctionsFunctionsInputParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>

---

##### `putReturnParams` <a name="putReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams"></a>

```typescript
public putReturnParams(value: DataDatabricksFunctionsFunctionsReturnParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>

---

##### `putRoutineDependencies` <a name="putRoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies"></a>

```typescript
public putRoutineDependencies(value: DataDatabricksFunctionsFunctionsRoutineDependencies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>

---

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetBrowseOnly"></a>

```typescript
public resetBrowseOnly(): void
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetDataType` <a name="resetDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetExternalLanguage` <a name="resetExternalLanguage" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalLanguage"></a>

```typescript
public resetExternalLanguage(): void
```

##### `resetExternalName` <a name="resetExternalName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalName"></a>

```typescript
public resetExternalName(): void
```

##### `resetFullDataType` <a name="resetFullDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullDataType"></a>

```typescript
public resetFullDataType(): void
```

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullName"></a>

```typescript
public resetFullName(): void
```

##### `resetFunctionId` <a name="resetFunctionId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFunctionId"></a>

```typescript
public resetFunctionId(): void
```

##### `resetInputParams` <a name="resetInputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetInputParams"></a>

```typescript
public resetInputParams(): void
```

##### `resetIsDeterministic` <a name="resetIsDeterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsDeterministic"></a>

```typescript
public resetIsDeterministic(): void
```

##### `resetIsNullCall` <a name="resetIsNullCall" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsNullCall"></a>

```typescript
public resetIsNullCall(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetParameterStyle` <a name="resetParameterStyle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetParameterStyle"></a>

```typescript
public resetParameterStyle(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetReturnParams` <a name="resetReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetReturnParams"></a>

```typescript
public resetReturnParams(): void
```

##### `resetRoutineBody` <a name="resetRoutineBody" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineBody"></a>

```typescript
public resetRoutineBody(): void
```

##### `resetRoutineDefinition` <a name="resetRoutineDefinition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDefinition"></a>

```typescript
public resetRoutineDefinition(): void
```

##### `resetRoutineDependencies` <a name="resetRoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDependencies"></a>

```typescript
public resetRoutineDependencies(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetSecurityType` <a name="resetSecurityType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSecurityType"></a>

```typescript
public resetSecurityType(): void
```

##### `resetSpecificName` <a name="resetSpecificName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSpecificName"></a>

```typescript
public resetSpecificName(): void
```

##### `resetSqlDataAccess` <a name="resetSqlDataAccess" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlDataAccess"></a>

```typescript
public resetSqlDataAccess(): void
```

##### `resetSqlPath` <a name="resetSqlPath" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlPath"></a>

```typescript
public resetSqlPath(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedBy"></a>

```typescript
public resetUpdatedBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParams">inputParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference">DataDatabricksFunctionsFunctionsInputParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParams">returnParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference">DataDatabricksFunctionsFunctionsReturnParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependencies">routineDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference">DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnlyInput">browseOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguageInput">externalLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalNameInput">externalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataTypeInput">fullDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionIdInput">functionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParamsInput">inputParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministicInput">isDeterministicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCallInput">isNullCallInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyleInput">parameterStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParamsInput">returnParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBodyInput">routineBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinitionInput">routineDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependenciesInput">routineDependenciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityTypeInput">securityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificNameInput">specificNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccessInput">sqlDataAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPathInput">sqlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguage">externalLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalName">externalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataType">fullDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministic">isDeterministic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCall">isNullCall</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyle">parameterStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.properties">properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBody">routineBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinition">routineDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityType">securityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificName">specificName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccess">sqlDataAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPath">sqlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputParams`<sup>Required</sup> <a name="inputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParams"></a>

```typescript
public readonly inputParams: DataDatabricksFunctionsFunctionsInputParamsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference">DataDatabricksFunctionsFunctionsInputParamsOutputReference</a>

---

##### `returnParams`<sup>Required</sup> <a name="returnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParams"></a>

```typescript
public readonly returnParams: DataDatabricksFunctionsFunctionsReturnParamsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference">DataDatabricksFunctionsFunctionsReturnParamsOutputReference</a>

---

##### `routineDependencies`<sup>Required</sup> <a name="routineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependencies"></a>

```typescript
public readonly routineDependencies: DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference">DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference</a>

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnlyInput"></a>

```typescript
public readonly browseOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: number;
```

- *Type:* number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `externalLanguageInput`<sup>Optional</sup> <a name="externalLanguageInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguageInput"></a>

```typescript
public readonly externalLanguageInput: string;
```

- *Type:* string

---

##### `externalNameInput`<sup>Optional</sup> <a name="externalNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalNameInput"></a>

```typescript
public readonly externalNameInput: string;
```

- *Type:* string

---

##### `fullDataTypeInput`<sup>Optional</sup> <a name="fullDataTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataTypeInput"></a>

```typescript
public readonly fullDataTypeInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionIdInput"></a>

```typescript
public readonly functionIdInput: string;
```

- *Type:* string

---

##### `inputParamsInput`<sup>Optional</sup> <a name="inputParamsInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParamsInput"></a>

```typescript
public readonly inputParamsInput: IResolvable | DataDatabricksFunctionsFunctionsInputParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>

---

##### `isDeterministicInput`<sup>Optional</sup> <a name="isDeterministicInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministicInput"></a>

```typescript
public readonly isDeterministicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isNullCallInput`<sup>Optional</sup> <a name="isNullCallInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCallInput"></a>

```typescript
public readonly isNullCallInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `parameterStyleInput`<sup>Optional</sup> <a name="parameterStyleInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyleInput"></a>

```typescript
public readonly parameterStyleInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: string;
```

- *Type:* string

---

##### `returnParamsInput`<sup>Optional</sup> <a name="returnParamsInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParamsInput"></a>

```typescript
public readonly returnParamsInput: IResolvable | DataDatabricksFunctionsFunctionsReturnParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>

---

##### `routineBodyInput`<sup>Optional</sup> <a name="routineBodyInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBodyInput"></a>

```typescript
public readonly routineBodyInput: string;
```

- *Type:* string

---

##### `routineDefinitionInput`<sup>Optional</sup> <a name="routineDefinitionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinitionInput"></a>

```typescript
public readonly routineDefinitionInput: string;
```

- *Type:* string

---

##### `routineDependenciesInput`<sup>Optional</sup> <a name="routineDependenciesInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependenciesInput"></a>

```typescript
public readonly routineDependenciesInput: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependencies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `securityTypeInput`<sup>Optional</sup> <a name="securityTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityTypeInput"></a>

```typescript
public readonly securityTypeInput: string;
```

- *Type:* string

---

##### `specificNameInput`<sup>Optional</sup> <a name="specificNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificNameInput"></a>

```typescript
public readonly specificNameInput: string;
```

- *Type:* string

---

##### `sqlDataAccessInput`<sup>Optional</sup> <a name="sqlDataAccessInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccessInput"></a>

```typescript
public readonly sqlDataAccessInput: string;
```

- *Type:* string

---

##### `sqlPathInput`<sup>Optional</sup> <a name="sqlPathInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPathInput"></a>

```typescript
public readonly sqlPathInput: string;
```

- *Type:* string

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: number;
```

- *Type:* number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedByInput"></a>

```typescript
public readonly updatedByInput: string;
```

- *Type:* string

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `externalLanguage`<sup>Required</sup> <a name="externalLanguage" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguage"></a>

```typescript
public readonly externalLanguage: string;
```

- *Type:* string

---

##### `externalName`<sup>Required</sup> <a name="externalName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalName"></a>

```typescript
public readonly externalName: string;
```

- *Type:* string

---

##### `fullDataType`<sup>Required</sup> <a name="fullDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataType"></a>

```typescript
public readonly fullDataType: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `isDeterministic`<sup>Required</sup> <a name="isDeterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministic"></a>

```typescript
public readonly isDeterministic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isNullCall`<sup>Required</sup> <a name="isNullCall" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCall"></a>

```typescript
public readonly isNullCall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `parameterStyle`<sup>Required</sup> <a name="parameterStyle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyle"></a>

```typescript
public readonly parameterStyle: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

---

##### `routineBody`<sup>Required</sup> <a name="routineBody" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBody"></a>

```typescript
public readonly routineBody: string;
```

- *Type:* string

---

##### `routineDefinition`<sup>Required</sup> <a name="routineDefinition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinition"></a>

```typescript
public readonly routineDefinition: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `securityType`<sup>Required</sup> <a name="securityType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityType"></a>

```typescript
public readonly securityType: string;
```

- *Type:* string

---

##### `specificName`<sup>Required</sup> <a name="specificName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificName"></a>

```typescript
public readonly specificName: string;
```

- *Type:* string

---

##### `sqlDataAccess`<sup>Required</sup> <a name="sqlDataAccess" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccess"></a>

```typescript
public readonly sqlDataAccess: string;
```

- *Type:* string

---

##### `sqlPath`<sup>Required</sup> <a name="sqlPath" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPath"></a>

```typescript
public readonly sqlPath: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>

---


### DataDatabricksFunctionsFunctionsReturnParamsOutputReference <a name="DataDatabricksFunctionsFunctionsReturnParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | DataDatabricksFunctionsFunctionsReturnParamsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>[]

---

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList">DataDatabricksFunctionsFunctionsReturnParamsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataDatabricksFunctionsFunctionsReturnParamsParametersList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList">DataDatabricksFunctionsFunctionsReturnParamsParametersList</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DataDatabricksFunctionsFunctionsReturnParamsParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsReturnParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>

---


### DataDatabricksFunctionsFunctionsReturnParamsParametersList <a name="DataDatabricksFunctionsFunctionsReturnParamsParametersList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get"></a>

```typescript
public get(index: number): DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsReturnParamsParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>[]

---


### DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference <a name="DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterDefault">resetParameterDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterMode">resetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterType">resetParameterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetParameterDefault` <a name="resetParameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterDefault"></a>

```typescript
public resetParameterDefault(): void
```

##### `resetParameterMode` <a name="resetParameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterMode"></a>

```typescript
public resetParameterMode(): void
```

##### `resetParameterType` <a name="resetParameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterType"></a>

```typescript
public resetParameterType(): void
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeIntervalType"></a>

```typescript
public resetTypeIntervalType(): void
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeJson"></a>

```typescript
public resetTypeJson(): void
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypePrecision"></a>

```typescript
public resetTypePrecision(): void
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeScale"></a>

```typescript
public resetTypeScale(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefaultInput">parameterDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterModeInput">parameterModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterTypeInput">parameterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefault">parameterDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterMode">parameterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterType">parameterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJson">typeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecision">typePrecision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScale">typeScale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeText">typeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterDefaultInput`<sup>Optional</sup> <a name="parameterDefaultInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefaultInput"></a>

```typescript
public readonly parameterDefaultInput: string;
```

- *Type:* string

---

##### `parameterModeInput`<sup>Optional</sup> <a name="parameterModeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterModeInput"></a>

```typescript
public readonly parameterModeInput: string;
```

- *Type:* string

---

##### `parameterTypeInput`<sup>Optional</sup> <a name="parameterTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterTypeInput"></a>

```typescript
public readonly parameterTypeInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalTypeInput"></a>

```typescript
public readonly typeIntervalTypeInput: string;
```

- *Type:* string

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJsonInput"></a>

```typescript
public readonly typeJsonInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecisionInput"></a>

```typescript
public readonly typePrecisionInput: number;
```

- *Type:* number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScaleInput"></a>

```typescript
public readonly typeScaleInput: number;
```

- *Type:* number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeTextInput"></a>

```typescript
public readonly typeTextInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameterDefault`<sup>Required</sup> <a name="parameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefault"></a>

```typescript
public readonly parameterDefault: string;
```

- *Type:* string

---

##### `parameterMode`<sup>Required</sup> <a name="parameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterMode"></a>

```typescript
public readonly parameterMode: string;
```

- *Type:* string

---

##### `parameterType`<sup>Required</sup> <a name="parameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterType"></a>

```typescript
public readonly parameterType: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalType"></a>

```typescript
public readonly typeIntervalType: string;
```

- *Type:* string

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJson"></a>

```typescript
public readonly typeJson: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecision"></a>

```typescript
public readonly typePrecision: number;
```

- *Type:* number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScale"></a>

```typescript
public readonly typeScale: number;
```

- *Type:* number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeText"></a>

```typescript
public readonly typeText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsReturnParamsParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.resetCredentialName">resetCredentialName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialName` <a name="resetCredentialName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.resetCredentialName"></a>

```typescript
public resetCredentialName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.credentialName">credentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.credentialNameInput"></a>

```typescript
public readonly credentialNameInput: string;
```

- *Type:* string

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput">functionFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullName">functionFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionFullNameInput`<sup>Optional</sup> <a name="functionFullNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput"></a>

```typescript
public readonly functionFullNameInput: string;
```

- *Type:* string

---

##### `functionFullName`<sup>Required</sup> <a name="functionFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullName"></a>

```typescript
public readonly functionFullName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get"></a>

```typescript
public get(index: number): DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>[]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putConnection">putConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putCredential">putCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction">putFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetConnection">resetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetCredential">resetCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetTable">resetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnection` <a name="putConnection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putConnection"></a>

```typescript
public putConnection(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>

---

##### `putCredential` <a name="putCredential" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putCredential"></a>

```typescript
public putCredential(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>

---

##### `putFunction` <a name="putFunction" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction"></a>

```typescript
public putFunction(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable"></a>

```typescript
public putTable(value: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>

---

##### `resetConnection` <a name="resetConnection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetConnection"></a>

```typescript
public resetConnection(): void
```

##### `resetCredential` <a name="resetCredential" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetCredential"></a>

```typescript
public resetCredential(): void
```

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetFunction"></a>

```typescript
public resetFunction(): void
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetTable"></a>

```typescript
public resetTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.connection">connection</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.connectionInput">connectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.credentialInput">credentialInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.functionInput">functionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.tableInput">tableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.connection"></a>

```typescript
public readonly connection: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference</a>

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.credential"></a>

```typescript
public readonly credential: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference</a>

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.function"></a>

```typescript
public readonly function: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.table"></a>

```typescript
public readonly table: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference</a>

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.connectionInput"></a>

```typescript
public readonly connectionInput: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.credentialInput"></a>

```typescript
public readonly credentialInput: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullNameInput">tableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullName">tableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableFullNameInput`<sup>Optional</sup> <a name="tableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullNameInput"></a>

```typescript
public readonly tableFullNameInput: string;
```

- *Type:* string

---

##### `tableFullName`<sup>Required</sup> <a name="tableFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullName"></a>

```typescript
public readonly tableFullName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFunctions } from '@cdktf/provider-databricks'

new dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resetDependencies">resetDependencies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependencies` <a name="putDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies"></a>

```typescript
public putDependencies(value: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>[]

---

##### `resetDependencies` <a name="resetDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resetDependencies"></a>

```typescript
public resetDependencies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependenciesInput">dependenciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependencies"></a>

```typescript
public readonly dependencies: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList</a>

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependenciesInput"></a>

```typescript
public readonly dependenciesInput: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFunctionsFunctionsRoutineDependencies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>

---



