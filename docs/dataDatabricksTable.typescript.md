# `dataDatabricksTable` Submodule <a name="`dataDatabricksTable` Submodule" id="@cdktf/provider-databricks.dataDatabricksTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksTable <a name="DataDatabricksTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table databricks_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTable(scope: Construct, id: string, config: DataDatabricksTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig">DataDatabricksTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig">DataDatabricksTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.putTableInfo">putTableInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetTableInfo">resetTableInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTableInfo` <a name="putTableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.putTableInfo"></a>

```typescript
public putTableInfo(value: DataDatabricksTableTableInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.putTableInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTableInfo` <a name="resetTableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.resetTableInfo"></a>

```typescript
public resetTableInfo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isConstruct"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

dataDatabricksTable.DataDatabricksTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformElement"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

dataDatabricksTable.DataDatabricksTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformDataSource"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

dataDatabricksTable.DataDatabricksTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

dataDatabricksTable.DataDatabricksTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfo">tableInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference">DataDatabricksTableTableInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfoInput">tableInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `tableInfo`<sup>Required</sup> <a name="tableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfo"></a>

```typescript
public readonly tableInfo: DataDatabricksTableTableInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference">DataDatabricksTableTableInfoOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tableInfoInput`<sup>Optional</sup> <a name="tableInfoInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tableInfoInput"></a>

```typescript
public readonly tableInfoInput: DataDatabricksTableTableInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksTableConfig <a name="DataDatabricksTableConfig" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableConfig: dataDatabricksTable.DataDatabricksTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#id DataDatabricksTable#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.tableInfo">tableInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a></code> | table_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#id DataDatabricksTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tableInfo`<sup>Optional</sup> <a name="tableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableConfig.property.tableInfo"></a>

```typescript
public readonly tableInfo: DataDatabricksTableTableInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

table_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#table_info DataDatabricksTable#table_info}

---

### DataDatabricksTableTableInfo <a name="DataDatabricksTableTableInfo" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfo: dataDatabricksTable.DataDatabricksTableTableInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.accessPoint">accessPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#access_point DataDatabricksTable#access_point}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#browse_only DataDatabricksTable#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#catalog_name DataDatabricksTable#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.columns">columns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>[]</code> | columns block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#comment DataDatabricksTable#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdAt">createdAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#created_at DataDatabricksTable#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdBy">createdBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#created_by DataDatabricksTable#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataAccessConfigurationId">dataAccessConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#data_access_configuration_id DataDatabricksTable#data_access_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataSourceFormat">dataSourceFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#data_source_format DataDatabricksTable#data_source_format}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deletedAt">deletedAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#deleted_at DataDatabricksTable#deleted_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deltaRuntimePropertiesKvpairs">deltaRuntimePropertiesKvpairs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a></code> | delta_runtime_properties_kvpairs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#enable_predictive_optimization DataDatabricksTable#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.encryptionDetails">encryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#full_name DataDatabricksTable#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#metastore_id DataDatabricksTable#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#owner DataDatabricksTable#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.pipelineId">pipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#pipeline_id DataDatabricksTable#pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#properties DataDatabricksTable#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a></code> | row_filter block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#schema_name DataDatabricksTable#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.securableKindManifest">securableKindManifest</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a></code> | securable_kind_manifest block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.sqlPath">sqlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#sql_path DataDatabricksTable#sql_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageCredentialName">storageCredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#storage_credential_name DataDatabricksTable#storage_credential_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageLocation">storageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#storage_location DataDatabricksTable#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableConstraints">tableConstraints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>[]</code> | table_constraints block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableId">tableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#table_id DataDatabricksTable#table_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableType">tableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#table_type DataDatabricksTable#table_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedAt">updatedAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#updated_at DataDatabricksTable#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedBy">updatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#updated_by DataDatabricksTable#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDefinition">viewDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#view_definition DataDatabricksTable#view_definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDependencies">viewDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a></code> | view_dependencies block. |

---

##### `accessPoint`<sup>Optional</sup> <a name="accessPoint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.accessPoint"></a>

```typescript
public readonly accessPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#access_point DataDatabricksTable#access_point}.

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#browse_only DataDatabricksTable#browse_only}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#catalog_name DataDatabricksTable#catalog_name}.

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.columns"></a>

```typescript
public readonly columns: IResolvable | DataDatabricksTableTableInfoColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>[]

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#columns DataDatabricksTable#columns}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#comment DataDatabricksTable#comment}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#created_at DataDatabricksTable#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#created_by DataDatabricksTable#created_by}.

---

##### `dataAccessConfigurationId`<sup>Optional</sup> <a name="dataAccessConfigurationId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataAccessConfigurationId"></a>

```typescript
public readonly dataAccessConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#data_access_configuration_id DataDatabricksTable#data_access_configuration_id}.

---

##### `dataSourceFormat`<sup>Optional</sup> <a name="dataSourceFormat" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.dataSourceFormat"></a>

```typescript
public readonly dataSourceFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#data_source_format DataDatabricksTable#data_source_format}.

---

##### `deletedAt`<sup>Optional</sup> <a name="deletedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deletedAt"></a>

```typescript
public readonly deletedAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#deleted_at DataDatabricksTable#deleted_at}.

---

##### `deltaRuntimePropertiesKvpairs`<sup>Optional</sup> <a name="deltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.deltaRuntimePropertiesKvpairs"></a>

```typescript
public readonly deltaRuntimePropertiesKvpairs: DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

delta_runtime_properties_kvpairs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#delta_runtime_properties_kvpairs DataDatabricksTable#delta_runtime_properties_kvpairs}

---

##### `effectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.effectivePredictiveOptimizationFlag"></a>

```typescript
public readonly effectivePredictiveOptimizationFlag: DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#effective_predictive_optimization_flag DataDatabricksTable#effective_predictive_optimization_flag}

---

##### `enablePredictiveOptimization`<sup>Optional</sup> <a name="enablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.enablePredictiveOptimization"></a>

```typescript
public readonly enablePredictiveOptimization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#enable_predictive_optimization DataDatabricksTable#enable_predictive_optimization}.

---

##### `encryptionDetails`<sup>Optional</sup> <a name="encryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.encryptionDetails"></a>

```typescript
public readonly encryptionDetails: DataDatabricksTableTableInfoEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#encryption_details DataDatabricksTable#encryption_details}

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#full_name DataDatabricksTable#full_name}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#metastore_id DataDatabricksTable#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#owner DataDatabricksTable#owner}.

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#pipeline_id DataDatabricksTable#pipeline_id}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#properties DataDatabricksTable#properties}.

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.rowFilter"></a>

```typescript
public readonly rowFilter: DataDatabricksTableTableInfoRowFilter;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

row_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#row_filter DataDatabricksTable#row_filter}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#schema_name DataDatabricksTable#schema_name}.

---

##### `securableKindManifest`<sup>Optional</sup> <a name="securableKindManifest" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.securableKindManifest"></a>

```typescript
public readonly securableKindManifest: DataDatabricksTableTableInfoSecurableKindManifest;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a>

securable_kind_manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#securable_kind_manifest DataDatabricksTable#securable_kind_manifest}

---

##### `sqlPath`<sup>Optional</sup> <a name="sqlPath" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.sqlPath"></a>

```typescript
public readonly sqlPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#sql_path DataDatabricksTable#sql_path}.

---

##### `storageCredentialName`<sup>Optional</sup> <a name="storageCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageCredentialName"></a>

```typescript
public readonly storageCredentialName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#storage_credential_name DataDatabricksTable#storage_credential_name}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#storage_location DataDatabricksTable#storage_location}.

---

##### `tableConstraints`<sup>Optional</sup> <a name="tableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableConstraints"></a>

```typescript
public readonly tableConstraints: IResolvable | DataDatabricksTableTableInfoTableConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>[]

table_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#table_constraints DataDatabricksTable#table_constraints}

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#table_id DataDatabricksTable#table_id}.

---

##### `tableType`<sup>Optional</sup> <a name="tableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#table_type DataDatabricksTable#table_type}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#updated_at DataDatabricksTable#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#updated_by DataDatabricksTable#updated_by}.

---

##### `viewDefinition`<sup>Optional</sup> <a name="viewDefinition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDefinition"></a>

```typescript
public readonly viewDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#view_definition DataDatabricksTable#view_definition}.

---

##### `viewDependencies`<sup>Optional</sup> <a name="viewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo.property.viewDependencies"></a>

```typescript
public readonly viewDependencies: DataDatabricksTableTableInfoViewDependencies;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

view_dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#view_dependencies DataDatabricksTable#view_dependencies}

---

### DataDatabricksTableTableInfoColumns <a name="DataDatabricksTableTableInfoColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoColumns: dataDatabricksTable.DataDatabricksTableTableInfoColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#comment DataDatabricksTable#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a></code> | mask block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.nullable">nullable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#nullable DataDatabricksTable#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.partitionIndex">partitionIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#partition_index DataDatabricksTable#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#position DataDatabricksTable#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_interval_type DataDatabricksTable#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeJson">typeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_json DataDatabricksTable#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_name DataDatabricksTable#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typePrecision">typePrecision</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_precision DataDatabricksTable#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeScale">typeScale</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_scale DataDatabricksTable#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeText">typeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_text DataDatabricksTable#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#comment DataDatabricksTable#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.mask"></a>

```typescript
public readonly mask: DataDatabricksTableTableInfoColumnsMask;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

mask block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#mask DataDatabricksTable#mask}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.nullable"></a>

```typescript
public readonly nullable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#nullable DataDatabricksTable#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.partitionIndex"></a>

```typescript
public readonly partitionIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#partition_index DataDatabricksTable#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#position DataDatabricksTable#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeIntervalType"></a>

```typescript
public readonly typeIntervalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_interval_type DataDatabricksTable#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeJson"></a>

```typescript
public readonly typeJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_json DataDatabricksTable#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_name DataDatabricksTable#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typePrecision"></a>

```typescript
public readonly typePrecision: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_precision DataDatabricksTable#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeScale"></a>

```typescript
public readonly typeScale: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_scale DataDatabricksTable#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns.property.typeText"></a>

```typescript
public readonly typeText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type_text DataDatabricksTable#type_text}.

---

### DataDatabricksTableTableInfoColumnsMask <a name="DataDatabricksTableTableInfoColumnsMask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoColumnsMask: dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#function_name DataDatabricksTable#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#using_column_names DataDatabricksTable#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#function_name DataDatabricksTable#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask.property.usingColumnNames"></a>

```typescript
public readonly usingColumnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#using_column_names DataDatabricksTable#using_column_names}.

---

### DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs <a name="DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs: dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs.property.deltaRuntimeProperties">deltaRuntimeProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#delta_runtime_properties DataDatabricksTable#delta_runtime_properties}. |

---

##### `deltaRuntimeProperties`<sup>Required</sup> <a name="deltaRuntimeProperties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs.property.deltaRuntimeProperties"></a>

```typescript
public readonly deltaRuntimeProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#delta_runtime_properties DataDatabricksTable#delta_runtime_properties}.

---

### DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag: dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#value DataDatabricksTable#value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">inheritedFromName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#inherited_from_name DataDatabricksTable#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">inheritedFromType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#inherited_from_type DataDatabricksTable#inherited_from_type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#value DataDatabricksTable#value}.

---

##### `inheritedFromName`<sup>Optional</sup> <a name="inheritedFromName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```typescript
public readonly inheritedFromName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#inherited_from_name DataDatabricksTable#inherited_from_name}.

---

##### `inheritedFromType`<sup>Optional</sup> <a name="inheritedFromType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```typescript
public readonly inheritedFromType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#inherited_from_type DataDatabricksTable#inherited_from_type}.

---

### DataDatabricksTableTableInfoEncryptionDetails <a name="DataDatabricksTableTableInfoEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoEncryptionDetails: dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails.property.sseEncryptionDetails">sseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `sseEncryptionDetails`<sup>Optional</sup> <a name="sseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails.property.sseEncryptionDetails"></a>

```typescript
public readonly sseEncryptionDetails: DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#sse_encryption_details DataDatabricksTable#sse_encryption_details}

---

### DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails <a name="DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails: dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#algorithm DataDatabricksTable#algorithm}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#aws_kms_key_arn DataDatabricksTable#aws_kms_key_arn}. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#algorithm DataDatabricksTable#algorithm}.

---

##### `awsKmsKeyArn`<sup>Optional</sup> <a name="awsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```typescript
public readonly awsKmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#aws_kms_key_arn DataDatabricksTable#aws_kms_key_arn}.

---

### DataDatabricksTableTableInfoRowFilter <a name="DataDatabricksTableTableInfoRowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoRowFilter: dataDatabricksTable.DataDatabricksTableTableInfoRowFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#function_name DataDatabricksTable#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.inputColumnNames">inputColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#input_column_names DataDatabricksTable#input_column_names}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#function_name DataDatabricksTable#function_name}.

---

##### `inputColumnNames`<sup>Required</sup> <a name="inputColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter.property.inputColumnNames"></a>

```typescript
public readonly inputColumnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#input_column_names DataDatabricksTable#input_column_names}.

---

### DataDatabricksTableTableInfoSecurableKindManifest <a name="DataDatabricksTableTableInfoSecurableKindManifest" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoSecurableKindManifest: dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.assignablePrivileges">assignablePrivileges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#assignable_privileges DataDatabricksTable#assignable_privileges}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.capabilities">capabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#capabilities DataDatabricksTable#capabilities}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.options">options</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>[]</code> | options block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.securableKind">securableKind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#securable_kind DataDatabricksTable#securable_kind}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.securableType">securableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#securable_type DataDatabricksTable#securable_type}. |

---

##### `assignablePrivileges`<sup>Optional</sup> <a name="assignablePrivileges" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.assignablePrivileges"></a>

```typescript
public readonly assignablePrivileges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#assignable_privileges DataDatabricksTable#assignable_privileges}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#capabilities DataDatabricksTable#capabilities}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.options"></a>

```typescript
public readonly options: IResolvable | DataDatabricksTableTableInfoSecurableKindManifestOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>[]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#options DataDatabricksTable#options}

---

##### `securableKind`<sup>Optional</sup> <a name="securableKind" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.securableKind"></a>

```typescript
public readonly securableKind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#securable_kind DataDatabricksTable#securable_kind}.

---

##### `securableType`<sup>Optional</sup> <a name="securableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#securable_type DataDatabricksTable#securable_type}.

---

### DataDatabricksTableTableInfoSecurableKindManifestOptions <a name="DataDatabricksTableTableInfoSecurableKindManifestOptions" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoSecurableKindManifestOptions: dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#allowed_values DataDatabricksTable#allowed_values}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#default_value DataDatabricksTable#default_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#description DataDatabricksTable#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.hint">hint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#hint DataDatabricksTable#hint}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isCopiable">isCopiable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_copiable DataDatabricksTable#is_copiable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isCreatable">isCreatable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_creatable DataDatabricksTable#is_creatable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isHidden">isHidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_hidden DataDatabricksTable#is_hidden}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isLoggable">isLoggable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_loggable DataDatabricksTable#is_loggable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isRequired">isRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_required DataDatabricksTable#is_required}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isSecret">isSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_secret DataDatabricksTable#is_secret}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isUpdatable">isUpdatable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_updatable DataDatabricksTable#is_updatable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.oauthStage">oauthStage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#oauth_stage DataDatabricksTable#oauth_stage}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type DataDatabricksTable#type}. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#allowed_values DataDatabricksTable#allowed_values}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#default_value DataDatabricksTable#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#description DataDatabricksTable#description}.

---

##### `hint`<sup>Optional</sup> <a name="hint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.hint"></a>

```typescript
public readonly hint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#hint DataDatabricksTable#hint}.

---

##### `isCopiable`<sup>Optional</sup> <a name="isCopiable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isCopiable"></a>

```typescript
public readonly isCopiable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_copiable DataDatabricksTable#is_copiable}.

---

##### `isCreatable`<sup>Optional</sup> <a name="isCreatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isCreatable"></a>

```typescript
public readonly isCreatable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_creatable DataDatabricksTable#is_creatable}.

---

##### `isHidden`<sup>Optional</sup> <a name="isHidden" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isHidden"></a>

```typescript
public readonly isHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_hidden DataDatabricksTable#is_hidden}.

---

##### `isLoggable`<sup>Optional</sup> <a name="isLoggable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isLoggable"></a>

```typescript
public readonly isLoggable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_loggable DataDatabricksTable#is_loggable}.

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_required DataDatabricksTable#is_required}.

---

##### `isSecret`<sup>Optional</sup> <a name="isSecret" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isSecret"></a>

```typescript
public readonly isSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_secret DataDatabricksTable#is_secret}.

---

##### `isUpdatable`<sup>Optional</sup> <a name="isUpdatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.isUpdatable"></a>

```typescript
public readonly isUpdatable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#is_updatable DataDatabricksTable#is_updatable}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `oauthStage`<sup>Optional</sup> <a name="oauthStage" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.oauthStage"></a>

```typescript
public readonly oauthStage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#oauth_stage DataDatabricksTable#oauth_stage}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#type DataDatabricksTable#type}.

---

### DataDatabricksTableTableInfoTableConstraints <a name="DataDatabricksTableTableInfoTableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoTableConstraints: dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a></code> | foreign_key_constraint block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.namedTableConstraint">namedTableConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a></code> | named_table_constraint block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a></code> | primary_key_constraint block. |

---

##### `foreignKeyConstraint`<sup>Optional</sup> <a name="foreignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.foreignKeyConstraint"></a>

```typescript
public readonly foreignKeyConstraint: DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#foreign_key_constraint DataDatabricksTable#foreign_key_constraint}

---

##### `namedTableConstraint`<sup>Optional</sup> <a name="namedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.namedTableConstraint"></a>

```typescript
public readonly namedTableConstraint: DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

named_table_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#named_table_constraint DataDatabricksTable#named_table_constraint}

---

##### `primaryKeyConstraint`<sup>Optional</sup> <a name="primaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints.property.primaryKeyConstraint"></a>

```typescript
public readonly primaryKeyConstraint: DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#primary_key_constraint DataDatabricksTable#primary_key_constraint}

---

### DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint <a name="DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint: dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.childColumns">childColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentColumns">parentColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#parent_columns DataDatabricksTable#parent_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentTable">parentTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#parent_table DataDatabricksTable#parent_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.rely">rely</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#rely DataDatabricksTable#rely}. |

---

##### `childColumns`<sup>Required</sup> <a name="childColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.childColumns"></a>

```typescript
public readonly childColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `parentColumns`<sup>Required</sup> <a name="parentColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentColumns"></a>

```typescript
public readonly parentColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#parent_columns DataDatabricksTable#parent_columns}.

---

##### `parentTable`<sup>Required</sup> <a name="parentTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.parentTable"></a>

```typescript
public readonly parentTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#parent_table DataDatabricksTable#parent_table}.

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint.property.rely"></a>

```typescript
public readonly rely: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#rely DataDatabricksTable#rely}.

---

### DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint <a name="DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoTableConstraintsNamedTableConstraint: dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

### DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint <a name="DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint: dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.childColumns">childColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.rely">rely</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#rely DataDatabricksTable#rely}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.timeseriesColumns">timeseriesColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#timeseries_columns DataDatabricksTable#timeseries_columns}. |

---

##### `childColumns`<sup>Required</sup> <a name="childColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.childColumns"></a>

```typescript
public readonly childColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#child_columns DataDatabricksTable#child_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#name DataDatabricksTable#name}.

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.rely"></a>

```typescript
public readonly rely: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#rely DataDatabricksTable#rely}.

---

##### `timeseriesColumns`<sup>Optional</sup> <a name="timeseriesColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint.property.timeseriesColumns"></a>

```typescript
public readonly timeseriesColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#timeseries_columns DataDatabricksTable#timeseries_columns}.

---

### DataDatabricksTableTableInfoViewDependencies <a name="DataDatabricksTableTableInfoViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoViewDependencies: dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies.property.dependencies">dependencies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>[]</code> | dependencies block. |

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies.property.dependencies"></a>

```typescript
public readonly dependencies: IResolvable | DataDatabricksTableTableInfoViewDependenciesDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>[]

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#dependencies DataDatabricksTable#dependencies}

---

### DataDatabricksTableTableInfoViewDependenciesDependencies <a name="DataDatabricksTableTableInfoViewDependenciesDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoViewDependenciesDependencies: dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.connection">connection</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a></code> | connection block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a></code> | credential block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a></code> | function block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a></code> | table block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.connection"></a>

```typescript
public readonly connection: DataDatabricksTableTableInfoViewDependenciesDependenciesConnection;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a>

connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#connection DataDatabricksTable#connection}

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.credential"></a>

```typescript
public readonly credential: DataDatabricksTableTableInfoViewDependenciesDependenciesCredential;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#credential DataDatabricksTable#credential}

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.function"></a>

```typescript
public readonly function: DataDatabricksTableTableInfoViewDependenciesDependenciesFunction;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#function DataDatabricksTable#function}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies.property.table"></a>

```typescript
public readonly table: DataDatabricksTableTableInfoViewDependenciesDependenciesTable;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#table DataDatabricksTable#table}

---

### DataDatabricksTableTableInfoViewDependenciesDependenciesConnection <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesConnection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoViewDependenciesDependenciesConnection: dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#connection_name DataDatabricksTable#connection_name}. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#connection_name DataDatabricksTable#connection_name}.

---

### DataDatabricksTableTableInfoViewDependenciesDependenciesCredential <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesCredential" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoViewDependenciesDependenciesCredential: dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential.property.credentialName">credentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#credential_name DataDatabricksTable#credential_name}. |

---

##### `credentialName`<sup>Optional</sup> <a name="credentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#credential_name DataDatabricksTable#credential_name}.

---

### DataDatabricksTableTableInfoViewDependenciesDependenciesFunction <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesFunction" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoViewDependenciesDependenciesFunction: dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction.property.functionFullName">functionFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#function_full_name DataDatabricksTable#function_full_name}. |

---

##### `functionFullName`<sup>Required</sup> <a name="functionFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction.property.functionFullName"></a>

```typescript
public readonly functionFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#function_full_name DataDatabricksTable#function_full_name}.

---

### DataDatabricksTableTableInfoViewDependenciesDependenciesTable <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

const dataDatabricksTableTableInfoViewDependenciesDependenciesTable: dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable.property.tableFullName">tableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#table_full_name DataDatabricksTable#table_full_name}. |

---

##### `tableFullName`<sup>Required</sup> <a name="tableFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable.property.tableFullName"></a>

```typescript
public readonly tableFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/table#table_full_name DataDatabricksTable#table_full_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksTableTableInfoColumnsList <a name="DataDatabricksTableTableInfoColumnsList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksTableTableInfoColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksTableTableInfoColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>[]

---


### DataDatabricksTableTableInfoColumnsMaskOutputReference <a name="DataDatabricksTableTableInfoColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetFunctionName"></a>

```typescript
public resetFunctionName(): void
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.resetUsingColumnNames"></a>

```typescript
public resetUsingColumnNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```typescript
public readonly usingColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.usingColumnNames"></a>

```typescript
public readonly usingColumnNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoColumnsMask;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

---


### DataDatabricksTableTableInfoColumnsOutputReference <a name="DataDatabricksTableTableInfoColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.putMask"></a>

```typescript
public putMask(value: DataDatabricksTableTableInfoColumnsMask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetMask"></a>

```typescript
public resetMask(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetNullable"></a>

```typescript
public resetNullable(): void
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPartitionIndex"></a>

```typescript
public resetPartitionIndex(): void
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetPosition"></a>

```typescript
public resetPosition(): void
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeIntervalType"></a>

```typescript
public resetTypeIntervalType(): void
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeJson"></a>

```typescript
public resetTypeJson(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeName"></a>

```typescript
public resetTypeName(): void
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypePrecision"></a>

```typescript
public resetTypePrecision(): void
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeScale"></a>

```typescript
public resetTypeScale(): void
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.resetTypeText"></a>

```typescript
public resetTypeText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference">DataDatabricksTableTableInfoColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.maskInput">maskInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullable">nullable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeText">typeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.mask"></a>

```typescript
public readonly mask: DataDatabricksTableTableInfoColumnsMaskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMaskOutputReference">DataDatabricksTableTableInfoColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.maskInput"></a>

```typescript
public readonly maskInput: DataDatabricksTableTableInfoColumnsMask;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsMask">DataDatabricksTableTableInfoColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullableInput"></a>

```typescript
public readonly nullableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndexInput"></a>

```typescript
public readonly partitionIndexInput: number;
```

- *Type:* number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalTypeInput"></a>

```typescript
public readonly typeIntervalTypeInput: string;
```

- *Type:* string

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJsonInput"></a>

```typescript
public readonly typeJsonInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecisionInput"></a>

```typescript
public readonly typePrecisionInput: number;
```

- *Type:* number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScaleInput"></a>

```typescript
public readonly typeScaleInput: number;
```

- *Type:* number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeTextInput"></a>

```typescript
public readonly typeTextInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.nullable"></a>

```typescript
public readonly nullable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.partitionIndex"></a>

```typescript
public readonly partitionIndex: number;
```

- *Type:* number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeIntervalType"></a>

```typescript
public readonly typeIntervalType: string;
```

- *Type:* string

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeJson"></a>

```typescript
public readonly typeJson: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typePrecision"></a>

```typescript
public readonly typePrecision: number;
```

- *Type:* number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeScale"></a>

```typescript
public readonly typeScale: number;
```

- *Type:* number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.typeText"></a>

```typescript
public readonly typeText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksTableTableInfoColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>

---


### DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference <a name="DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimePropertiesInput">deltaRuntimePropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimeProperties">deltaRuntimeProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaRuntimePropertiesInput`<sup>Optional</sup> <a name="deltaRuntimePropertiesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimePropertiesInput"></a>

```typescript
public readonly deltaRuntimePropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deltaRuntimeProperties`<sup>Required</sup> <a name="deltaRuntimeProperties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.deltaRuntimeProperties"></a>

```typescript
public readonly deltaRuntimeProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

---


### DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">resetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">resetInheritedFromType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInheritedFromName` <a name="resetInheritedFromName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```typescript
public resetInheritedFromName(): void
```

##### `resetInheritedFromType` <a name="resetInheritedFromType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```typescript
public resetInheritedFromType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">inheritedFromNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">inheritedFromTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">inheritedFromName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">inheritedFromType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inheritedFromNameInput`<sup>Optional</sup> <a name="inheritedFromNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```typescript
public readonly inheritedFromNameInput: string;
```

- *Type:* string

---

##### `inheritedFromTypeInput`<sup>Optional</sup> <a name="inheritedFromTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```typescript
public readonly inheritedFromTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `inheritedFromName`<sup>Required</sup> <a name="inheritedFromName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```typescript
public readonly inheritedFromName: string;
```

- *Type:* string

---

##### `inheritedFromType`<sup>Required</sup> <a name="inheritedFromType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```typescript
public readonly inheritedFromType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksTableTableInfoEncryptionDetailsOutputReference <a name="DataDatabricksTableTableInfoEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.putSseEncryptionDetails">putSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails">resetSseEncryptionDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSseEncryptionDetails` <a name="putSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```typescript
public putSseEncryptionDetails(value: DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `resetSseEncryptionDetails` <a name="resetSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```typescript
public resetSseEncryptionDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails">sseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">sseEncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sseEncryptionDetails`<sup>Required</sup> <a name="sseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```typescript
public readonly sseEncryptionDetails: DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `sseEncryptionDetailsInput`<sup>Optional</sup> <a name="sseEncryptionDetailsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```typescript
public readonly sseEncryptionDetailsInput: DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

---


### DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference <a name="DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">resetAwsKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetAwsKmsKeyArn` <a name="resetAwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```typescript
public resetAwsKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">awsKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `awsKmsKeyArnInput`<sup>Optional</sup> <a name="awsKmsKeyArnInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```typescript
public readonly awsKmsKeyArnInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="awsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```typescript
public readonly awsKmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetailsSseEncryptionDetails</a>

---


### DataDatabricksTableTableInfoOutputReference <a name="DataDatabricksTableTableInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putDeltaRuntimePropertiesKvpairs">putDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEffectivePredictiveOptimizationFlag">putEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEncryptionDetails">putEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putRowFilter">putRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putSecurableKindManifest">putSecurableKindManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putTableConstraints">putTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putViewDependencies">putViewDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetAccessPoint">resetAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataAccessConfigurationId">resetDataAccessConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataSourceFormat">resetDataSourceFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeletedAt">resetDeletedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeltaRuntimePropertiesKvpairs">resetDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEffectivePredictiveOptimizationFlag">resetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEnablePredictiveOptimization">resetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEncryptionDetails">resetEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetPipelineId">resetPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetRowFilter">resetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSecurableKindManifest">resetSecurableKindManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSqlPath">resetSqlPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageCredentialName">resetStorageCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableConstraints">resetTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableId">resetTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableType">resetTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDefinition">resetViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDependencies">resetViewDependencies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putColumns"></a>

```typescript
public putColumns(value: IResolvable | DataDatabricksTableTableInfoColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>[]

---

##### `putDeltaRuntimePropertiesKvpairs` <a name="putDeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putDeltaRuntimePropertiesKvpairs"></a>

```typescript
public putDeltaRuntimePropertiesKvpairs(value: DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putDeltaRuntimePropertiesKvpairs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

---

##### `putEffectivePredictiveOptimizationFlag` <a name="putEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```typescript
public putEffectivePredictiveOptimizationFlag(value: DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

---

##### `putEncryptionDetails` <a name="putEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEncryptionDetails"></a>

```typescript
public putEncryptionDetails(value: DataDatabricksTableTableInfoEncryptionDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

---

##### `putRowFilter` <a name="putRowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putRowFilter"></a>

```typescript
public putRowFilter(value: DataDatabricksTableTableInfoRowFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

---

##### `putSecurableKindManifest` <a name="putSecurableKindManifest" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putSecurableKindManifest"></a>

```typescript
public putSecurableKindManifest(value: DataDatabricksTableTableInfoSecurableKindManifest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putSecurableKindManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a>

---

##### `putTableConstraints` <a name="putTableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putTableConstraints"></a>

```typescript
public putTableConstraints(value: IResolvable | DataDatabricksTableTableInfoTableConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putTableConstraints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>[]

---

##### `putViewDependencies` <a name="putViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putViewDependencies"></a>

```typescript
public putViewDependencies(value: DataDatabricksTableTableInfoViewDependencies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.putViewDependencies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

---

##### `resetAccessPoint` <a name="resetAccessPoint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetAccessPoint"></a>

```typescript
public resetAccessPoint(): void
```

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetBrowseOnly"></a>

```typescript
public resetBrowseOnly(): void
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetColumns` <a name="resetColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetColumns"></a>

```typescript
public resetColumns(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetDataAccessConfigurationId` <a name="resetDataAccessConfigurationId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataAccessConfigurationId"></a>

```typescript
public resetDataAccessConfigurationId(): void
```

##### `resetDataSourceFormat` <a name="resetDataSourceFormat" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDataSourceFormat"></a>

```typescript
public resetDataSourceFormat(): void
```

##### `resetDeletedAt` <a name="resetDeletedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeletedAt"></a>

```typescript
public resetDeletedAt(): void
```

##### `resetDeltaRuntimePropertiesKvpairs` <a name="resetDeltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetDeltaRuntimePropertiesKvpairs"></a>

```typescript
public resetDeltaRuntimePropertiesKvpairs(): void
```

##### `resetEffectivePredictiveOptimizationFlag` <a name="resetEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```typescript
public resetEffectivePredictiveOptimizationFlag(): void
```

##### `resetEnablePredictiveOptimization` <a name="resetEnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEnablePredictiveOptimization"></a>

```typescript
public resetEnablePredictiveOptimization(): void
```

##### `resetEncryptionDetails` <a name="resetEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetEncryptionDetails"></a>

```typescript
public resetEncryptionDetails(): void
```

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetFullName"></a>

```typescript
public resetFullName(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetPipelineId` <a name="resetPipelineId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetPipelineId"></a>

```typescript
public resetPipelineId(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetRowFilter"></a>

```typescript
public resetRowFilter(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetSecurableKindManifest` <a name="resetSecurableKindManifest" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSecurableKindManifest"></a>

```typescript
public resetSecurableKindManifest(): void
```

##### `resetSqlPath` <a name="resetSqlPath" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetSqlPath"></a>

```typescript
public resetSqlPath(): void
```

##### `resetStorageCredentialName` <a name="resetStorageCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageCredentialName"></a>

```typescript
public resetStorageCredentialName(): void
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetStorageLocation"></a>

```typescript
public resetStorageLocation(): void
```

##### `resetTableConstraints` <a name="resetTableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableConstraints"></a>

```typescript
public resetTableConstraints(): void
```

##### `resetTableId` <a name="resetTableId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableId"></a>

```typescript
public resetTableId(): void
```

##### `resetTableType` <a name="resetTableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetTableType"></a>

```typescript
public resetTableType(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetUpdatedBy"></a>

```typescript
public resetUpdatedBy(): void
```

##### `resetViewDefinition` <a name="resetViewDefinition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDefinition"></a>

```typescript
public resetViewDefinition(): void
```

##### `resetViewDependencies` <a name="resetViewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.resetViewDependencies"></a>

```typescript
public resetViewDependencies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList">DataDatabricksTableTableInfoColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairs">deltaRuntimePropertiesKvpairs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetails">encryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference">DataDatabricksTableTableInfoRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.securableKindManifest">securableKindManifest</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference">DataDatabricksTableTableInfoSecurableKindManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraints">tableConstraints</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList">DataDatabricksTableTableInfoTableConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependencies">viewDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference">DataDatabricksTableTableInfoViewDependenciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPointInput">accessPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnlyInput">browseOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columnsInput">columnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationIdInput">dataAccessConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormatInput">dataSourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAtInput">deletedAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairsInput">deltaRuntimePropertiesKvpairsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">effectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimizationInput">enablePredictiveOptimizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetailsInput">encryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilterInput">rowFilterInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.securableKindManifestInput">securableKindManifestInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPathInput">sqlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialNameInput">storageCredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocationInput">storageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraintsInput">tableConstraintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableTypeInput">tableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinitionInput">viewDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependenciesInput">viewDependenciesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPoint">accessPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationId">dataAccessConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormat">dataSourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAt">deletedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPath">sqlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialName">storageCredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableType">tableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinition">viewDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columns"></a>

```typescript
public readonly columns: DataDatabricksTableTableInfoColumnsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumnsList">DataDatabricksTableTableInfoColumnsList</a>

---

##### `deltaRuntimePropertiesKvpairs`<sup>Required</sup> <a name="deltaRuntimePropertiesKvpairs" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairs"></a>

```typescript
public readonly deltaRuntimePropertiesKvpairs: DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairsOutputReference</a>

---

##### `effectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```typescript
public readonly effectivePredictiveOptimizationFlag: DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `encryptionDetails`<sup>Required</sup> <a name="encryptionDetails" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetails"></a>

```typescript
public readonly encryptionDetails: DataDatabricksTableTableInfoEncryptionDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetailsOutputReference">DataDatabricksTableTableInfoEncryptionDetailsOutputReference</a>

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilter"></a>

```typescript
public readonly rowFilter: DataDatabricksTableTableInfoRowFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference">DataDatabricksTableTableInfoRowFilterOutputReference</a>

---

##### `securableKindManifest`<sup>Required</sup> <a name="securableKindManifest" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.securableKindManifest"></a>

```typescript
public readonly securableKindManifest: DataDatabricksTableTableInfoSecurableKindManifestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference">DataDatabricksTableTableInfoSecurableKindManifestOutputReference</a>

---

##### `tableConstraints`<sup>Required</sup> <a name="tableConstraints" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraints"></a>

```typescript
public readonly tableConstraints: DataDatabricksTableTableInfoTableConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList">DataDatabricksTableTableInfoTableConstraintsList</a>

---

##### `viewDependencies`<sup>Required</sup> <a name="viewDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependencies"></a>

```typescript
public readonly viewDependencies: DataDatabricksTableTableInfoViewDependenciesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference">DataDatabricksTableTableInfoViewDependenciesOutputReference</a>

---

##### `accessPointInput`<sup>Optional</sup> <a name="accessPointInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPointInput"></a>

```typescript
public readonly accessPointInput: string;
```

- *Type:* string

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnlyInput"></a>

```typescript
public readonly browseOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: IResolvable | DataDatabricksTableTableInfoColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoColumns">DataDatabricksTableTableInfoColumns</a>[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: number;
```

- *Type:* number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `dataAccessConfigurationIdInput`<sup>Optional</sup> <a name="dataAccessConfigurationIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationIdInput"></a>

```typescript
public readonly dataAccessConfigurationIdInput: string;
```

- *Type:* string

---

##### `dataSourceFormatInput`<sup>Optional</sup> <a name="dataSourceFormatInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormatInput"></a>

```typescript
public readonly dataSourceFormatInput: string;
```

- *Type:* string

---

##### `deletedAtInput`<sup>Optional</sup> <a name="deletedAtInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAtInput"></a>

```typescript
public readonly deletedAtInput: number;
```

- *Type:* number

---

##### `deltaRuntimePropertiesKvpairsInput`<sup>Optional</sup> <a name="deltaRuntimePropertiesKvpairsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deltaRuntimePropertiesKvpairsInput"></a>

```typescript
public readonly deltaRuntimePropertiesKvpairsInput: DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs">DataDatabricksTableTableInfoDeltaRuntimePropertiesKvpairs</a>

---

##### `effectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlagInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```typescript
public readonly effectivePredictiveOptimizationFlagInput: DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag">DataDatabricksTableTableInfoEffectivePredictiveOptimizationFlag</a>

---

##### `enablePredictiveOptimizationInput`<sup>Optional</sup> <a name="enablePredictiveOptimizationInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```typescript
public readonly enablePredictiveOptimizationInput: string;
```

- *Type:* string

---

##### `encryptionDetailsInput`<sup>Optional</sup> <a name="encryptionDetailsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.encryptionDetailsInput"></a>

```typescript
public readonly encryptionDetailsInput: DataDatabricksTableTableInfoEncryptionDetails;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoEncryptionDetails">DataDatabricksTableTableInfoEncryptionDetails</a>

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.rowFilterInput"></a>

```typescript
public readonly rowFilterInput: DataDatabricksTableTableInfoRowFilter;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `securableKindManifestInput`<sup>Optional</sup> <a name="securableKindManifestInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.securableKindManifestInput"></a>

```typescript
public readonly securableKindManifestInput: DataDatabricksTableTableInfoSecurableKindManifest;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a>

---

##### `sqlPathInput`<sup>Optional</sup> <a name="sqlPathInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPathInput"></a>

```typescript
public readonly sqlPathInput: string;
```

- *Type:* string

---

##### `storageCredentialNameInput`<sup>Optional</sup> <a name="storageCredentialNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialNameInput"></a>

```typescript
public readonly storageCredentialNameInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: string;
```

- *Type:* string

---

##### `tableConstraintsInput`<sup>Optional</sup> <a name="tableConstraintsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableConstraintsInput"></a>

```typescript
public readonly tableConstraintsInput: IResolvable | DataDatabricksTableTableInfoTableConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>[]

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `tableTypeInput`<sup>Optional</sup> <a name="tableTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableTypeInput"></a>

```typescript
public readonly tableTypeInput: string;
```

- *Type:* string

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: number;
```

- *Type:* number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedByInput"></a>

```typescript
public readonly updatedByInput: string;
```

- *Type:* string

---

##### `viewDefinitionInput`<sup>Optional</sup> <a name="viewDefinitionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinitionInput"></a>

```typescript
public readonly viewDefinitionInput: string;
```

- *Type:* string

---

##### `viewDependenciesInput`<sup>Optional</sup> <a name="viewDependenciesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDependenciesInput"></a>

```typescript
public readonly viewDependenciesInput: DataDatabricksTableTableInfoViewDependencies;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

---

##### `accessPoint`<sup>Required</sup> <a name="accessPoint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.accessPoint"></a>

```typescript
public readonly accessPoint: string;
```

- *Type:* string

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `dataAccessConfigurationId`<sup>Required</sup> <a name="dataAccessConfigurationId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataAccessConfigurationId"></a>

```typescript
public readonly dataAccessConfigurationId: string;
```

- *Type:* string

---

##### `dataSourceFormat`<sup>Required</sup> <a name="dataSourceFormat" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.dataSourceFormat"></a>

```typescript
public readonly dataSourceFormat: string;
```

- *Type:* string

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.deletedAt"></a>

```typescript
public readonly deletedAt: number;
```

- *Type:* number

---

##### `enablePredictiveOptimization`<sup>Required</sup> <a name="enablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.enablePredictiveOptimization"></a>

```typescript
public readonly enablePredictiveOptimization: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sqlPath`<sup>Required</sup> <a name="sqlPath" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.sqlPath"></a>

```typescript
public readonly sqlPath: string;
```

- *Type:* string

---

##### `storageCredentialName`<sup>Required</sup> <a name="storageCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageCredentialName"></a>

```typescript
public readonly storageCredentialName: string;
```

- *Type:* string

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `viewDefinition`<sup>Required</sup> <a name="viewDefinition" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.viewDefinition"></a>

```typescript
public readonly viewDefinition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfo">DataDatabricksTableTableInfo</a>

---


### DataDatabricksTableTableInfoRowFilterOutputReference <a name="DataDatabricksTableTableInfoRowFilterOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNamesInput">inputColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNames">inputColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `inputColumnNamesInput`<sup>Optional</sup> <a name="inputColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNamesInput"></a>

```typescript
public readonly inputColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `inputColumnNames`<sup>Required</sup> <a name="inputColumnNames" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.inputColumnNames"></a>

```typescript
public readonly inputColumnNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoRowFilter;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoRowFilter">DataDatabricksTableTableInfoRowFilter</a>

---


### DataDatabricksTableTableInfoSecurableKindManifestOptionsList <a name="DataDatabricksTableTableInfoSecurableKindManifestOptionsList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.get"></a>

```typescript
public get(index: number): DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksTableTableInfoSecurableKindManifestOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>[]

---


### DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference <a name="DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetHint">resetHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsCopiable">resetIsCopiable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsCreatable">resetIsCreatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsHidden">resetIsHidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsLoggable">resetIsLoggable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsSecret">resetIsSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsUpdatable">resetIsUpdatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetOauthStage">resetOauthStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHint` <a name="resetHint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetHint"></a>

```typescript
public resetHint(): void
```

##### `resetIsCopiable` <a name="resetIsCopiable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsCopiable"></a>

```typescript
public resetIsCopiable(): void
```

##### `resetIsCreatable` <a name="resetIsCreatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsCreatable"></a>

```typescript
public resetIsCreatable(): void
```

##### `resetIsHidden` <a name="resetIsHidden" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsHidden"></a>

```typescript
public resetIsHidden(): void
```

##### `resetIsLoggable` <a name="resetIsLoggable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsLoggable"></a>

```typescript
public resetIsLoggable(): void
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsRequired"></a>

```typescript
public resetIsRequired(): void
```

##### `resetIsSecret` <a name="resetIsSecret" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsSecret"></a>

```typescript
public resetIsSecret(): void
```

##### `resetIsUpdatable` <a name="resetIsUpdatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetIsUpdatable"></a>

```typescript
public resetIsUpdatable(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOauthStage` <a name="resetOauthStage" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetOauthStage"></a>

```typescript
public resetOauthStage(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.hintInput">hintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCopiableInput">isCopiableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCreatableInput">isCreatableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isHiddenInput">isHiddenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isLoggableInput">isLoggableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isSecretInput">isSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isUpdatableInput">isUpdatableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.oauthStageInput">oauthStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.hint">hint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCopiable">isCopiable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCreatable">isCreatable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isHidden">isHidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isLoggable">isLoggable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isRequired">isRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isSecret">isSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isUpdatable">isUpdatable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.oauthStage">oauthStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hintInput`<sup>Optional</sup> <a name="hintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.hintInput"></a>

```typescript
public readonly hintInput: string;
```

- *Type:* string

---

##### `isCopiableInput`<sup>Optional</sup> <a name="isCopiableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCopiableInput"></a>

```typescript
public readonly isCopiableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isCreatableInput`<sup>Optional</sup> <a name="isCreatableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCreatableInput"></a>

```typescript
public readonly isCreatableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHiddenInput`<sup>Optional</sup> <a name="isHiddenInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isHiddenInput"></a>

```typescript
public readonly isHiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isLoggableInput`<sup>Optional</sup> <a name="isLoggableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isLoggableInput"></a>

```typescript
public readonly isLoggableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isRequiredInput"></a>

```typescript
public readonly isRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecretInput`<sup>Optional</sup> <a name="isSecretInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isSecretInput"></a>

```typescript
public readonly isSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUpdatableInput`<sup>Optional</sup> <a name="isUpdatableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isUpdatableInput"></a>

```typescript
public readonly isUpdatableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthStageInput`<sup>Optional</sup> <a name="oauthStageInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.oauthStageInput"></a>

```typescript
public readonly oauthStageInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.hint"></a>

```typescript
public readonly hint: string;
```

- *Type:* string

---

##### `isCopiable`<sup>Required</sup> <a name="isCopiable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCopiable"></a>

```typescript
public readonly isCopiable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isCreatable`<sup>Required</sup> <a name="isCreatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isCreatable"></a>

```typescript
public readonly isCreatable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isHidden"></a>

```typescript
public readonly isHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isLoggable`<sup>Required</sup> <a name="isLoggable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isLoggable"></a>

```typescript
public readonly isLoggable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecret`<sup>Required</sup> <a name="isSecret" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isSecret"></a>

```typescript
public readonly isSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUpdatable`<sup>Required</sup> <a name="isUpdatable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.isUpdatable"></a>

```typescript
public readonly isUpdatable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthStage`<sup>Required</sup> <a name="oauthStage" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.oauthStage"></a>

```typescript
public readonly oauthStage: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksTableTableInfoSecurableKindManifestOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>

---


### DataDatabricksTableTableInfoSecurableKindManifestOutputReference <a name="DataDatabricksTableTableInfoSecurableKindManifestOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetAssignablePrivileges">resetAssignablePrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetSecurableKind">resetSecurableKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetSecurableType">resetSecurableType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptions` <a name="putOptions" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.putOptions"></a>

```typescript
public putOptions(value: IResolvable | DataDatabricksTableTableInfoSecurableKindManifestOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.putOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>[]

---

##### `resetAssignablePrivileges` <a name="resetAssignablePrivileges" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetAssignablePrivileges"></a>

```typescript
public resetAssignablePrivileges(): void
```

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSecurableKind` <a name="resetSecurableKind" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetSecurableKind"></a>

```typescript
public resetSecurableKind(): void
```

##### `resetSecurableType` <a name="resetSecurableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.resetSecurableType"></a>

```typescript
public resetSecurableType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList">DataDatabricksTableTableInfoSecurableKindManifestOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.assignablePrivilegesInput">assignablePrivilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.optionsInput">optionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableKindInput">securableKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableTypeInput">securableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.assignablePrivileges">assignablePrivileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableKind">securableKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableType">securableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.options"></a>

```typescript
public readonly options: DataDatabricksTableTableInfoSecurableKindManifestOptionsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptionsList">DataDatabricksTableTableInfoSecurableKindManifestOptionsList</a>

---

##### `assignablePrivilegesInput`<sup>Optional</sup> <a name="assignablePrivilegesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.assignablePrivilegesInput"></a>

```typescript
public readonly assignablePrivilegesInput: string[];
```

- *Type:* string[]

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | DataDatabricksTableTableInfoSecurableKindManifestOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOptions">DataDatabricksTableTableInfoSecurableKindManifestOptions</a>[]

---

##### `securableKindInput`<sup>Optional</sup> <a name="securableKindInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableKindInput"></a>

```typescript
public readonly securableKindInput: string;
```

- *Type:* string

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableTypeInput"></a>

```typescript
public readonly securableTypeInput: string;
```

- *Type:* string

---

##### `assignablePrivileges`<sup>Required</sup> <a name="assignablePrivileges" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.assignablePrivileges"></a>

```typescript
public readonly assignablePrivileges: string[];
```

- *Type:* string[]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `securableKind`<sup>Required</sup> <a name="securableKind" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableKind"></a>

```typescript
public readonly securableKind: string;
```

- *Type:* string

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoSecurableKindManifest;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoSecurableKindManifest">DataDatabricksTableTableInfoSecurableKindManifest</a>

---


### DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resetRely">resetRely</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRely` <a name="resetRely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.resetRely"></a>

```typescript
public resetRely(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumnsInput">childColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumnsInput">parentColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTableInput">parentTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.relyInput">relyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumns">childColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumns">parentColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTable">parentTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.rely">rely</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `childColumnsInput`<sup>Optional</sup> <a name="childColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumnsInput"></a>

```typescript
public readonly childColumnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentColumnsInput`<sup>Optional</sup> <a name="parentColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumnsInput"></a>

```typescript
public readonly parentColumnsInput: string[];
```

- *Type:* string[]

---

##### `parentTableInput`<sup>Optional</sup> <a name="parentTableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTableInput"></a>

```typescript
public readonly parentTableInput: string;
```

- *Type:* string

---

##### `relyInput`<sup>Optional</sup> <a name="relyInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.relyInput"></a>

```typescript
public readonly relyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `childColumns`<sup>Required</sup> <a name="childColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.childColumns"></a>

```typescript
public readonly childColumns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentColumns`<sup>Required</sup> <a name="parentColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentColumns"></a>

```typescript
public readonly parentColumns: string[];
```

- *Type:* string[]

---

##### `parentTable`<sup>Required</sup> <a name="parentTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.parentTable"></a>

```typescript
public readonly parentTable: string;
```

- *Type:* string

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.rely"></a>

```typescript
public readonly rely: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

---


### DataDatabricksTableTableInfoTableConstraintsList <a name="DataDatabricksTableTableInfoTableConstraintsList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.get"></a>

```typescript
public get(index: number): DataDatabricksTableTableInfoTableConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksTableTableInfoTableConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>[]

---


### DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

---


### DataDatabricksTableTableInfoTableConstraintsOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putForeignKeyConstraint">putForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putNamedTableConstraint">putNamedTableConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putPrimaryKeyConstraint">putPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetForeignKeyConstraint">resetForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetNamedTableConstraint">resetNamedTableConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetPrimaryKeyConstraint">resetPrimaryKeyConstraint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForeignKeyConstraint` <a name="putForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putForeignKeyConstraint"></a>

```typescript
public putForeignKeyConstraint(value: DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putForeignKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

---

##### `putNamedTableConstraint` <a name="putNamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putNamedTableConstraint"></a>

```typescript
public putNamedTableConstraint(value: DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putNamedTableConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

---

##### `putPrimaryKeyConstraint` <a name="putPrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putPrimaryKeyConstraint"></a>

```typescript
public putPrimaryKeyConstraint(value: DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.putPrimaryKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

---

##### `resetForeignKeyConstraint` <a name="resetForeignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetForeignKeyConstraint"></a>

```typescript
public resetForeignKeyConstraint(): void
```

##### `resetNamedTableConstraint` <a name="resetNamedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetNamedTableConstraint"></a>

```typescript
public resetNamedTableConstraint(): void
```

##### `resetPrimaryKeyConstraint` <a name="resetPrimaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.resetPrimaryKeyConstraint"></a>

```typescript
public resetPrimaryKeyConstraint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraint">foreignKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraint">namedTableConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraint">primaryKeyConstraint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraintInput">foreignKeyConstraintInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraintInput">namedTableConstraintInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraintInput">primaryKeyConstraintInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `foreignKeyConstraint`<sup>Required</sup> <a name="foreignKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraint"></a>

```typescript
public readonly foreignKeyConstraint: DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraintOutputReference</a>

---

##### `namedTableConstraint`<sup>Required</sup> <a name="namedTableConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraint"></a>

```typescript
public readonly namedTableConstraint: DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraintOutputReference</a>

---

##### `primaryKeyConstraint`<sup>Required</sup> <a name="primaryKeyConstraint" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraint"></a>

```typescript
public readonly primaryKeyConstraint: DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference</a>

---

##### `foreignKeyConstraintInput`<sup>Optional</sup> <a name="foreignKeyConstraintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.foreignKeyConstraintInput"></a>

```typescript
public readonly foreignKeyConstraintInput: DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint">DataDatabricksTableTableInfoTableConstraintsForeignKeyConstraint</a>

---

##### `namedTableConstraintInput`<sup>Optional</sup> <a name="namedTableConstraintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.namedTableConstraintInput"></a>

```typescript
public readonly namedTableConstraintInput: DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint">DataDatabricksTableTableInfoTableConstraintsNamedTableConstraint</a>

---

##### `primaryKeyConstraintInput`<sup>Optional</sup> <a name="primaryKeyConstraintInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.primaryKeyConstraintInput"></a>

```typescript
public readonly primaryKeyConstraintInput: DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksTableTableInfoTableConstraints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraints">DataDatabricksTableTableInfoTableConstraints</a>

---


### DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference <a name="DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resetRely">resetRely</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resetTimeseriesColumns">resetTimeseriesColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRely` <a name="resetRely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resetRely"></a>

```typescript
public resetRely(): void
```

##### `resetTimeseriesColumns` <a name="resetTimeseriesColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.resetTimeseriesColumns"></a>

```typescript
public resetTimeseriesColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumnsInput">childColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.relyInput">relyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumnsInput">timeseriesColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumns">childColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.rely">rely</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumns">timeseriesColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `childColumnsInput`<sup>Optional</sup> <a name="childColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumnsInput"></a>

```typescript
public readonly childColumnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `relyInput`<sup>Optional</sup> <a name="relyInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.relyInput"></a>

```typescript
public readonly relyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeseriesColumnsInput`<sup>Optional</sup> <a name="timeseriesColumnsInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumnsInput"></a>

```typescript
public readonly timeseriesColumnsInput: string[];
```

- *Type:* string[]

---

##### `childColumns`<sup>Required</sup> <a name="childColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.childColumns"></a>

```typescript
public readonly childColumns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.rely"></a>

```typescript
public readonly rely: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeseriesColumns`<sup>Required</sup> <a name="timeseriesColumns" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.timeseriesColumns"></a>

```typescript
public readonly timeseriesColumns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint">DataDatabricksTableTableInfoTableConstraintsPrimaryKeyConstraint</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoViewDependenciesDependenciesConnection;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.resetCredentialName">resetCredentialName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialName` <a name="resetCredentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.resetCredentialName"></a>

```typescript
public resetCredentialName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.credentialName">credentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.credentialNameInput"></a>

```typescript
public readonly credentialNameInput: string;
```

- *Type:* string

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoViewDependenciesDependenciesCredential;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput">functionFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullName">functionFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionFullNameInput`<sup>Optional</sup> <a name="functionFullNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput"></a>

```typescript
public readonly functionFullNameInput: string;
```

- *Type:* string

---

##### `functionFullName`<sup>Required</sup> <a name="functionFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.functionFullName"></a>

```typescript
public readonly functionFullName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoViewDependenciesDependenciesFunction;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesList <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesList" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.get"></a>

```typescript
public get(index: number): DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksTableTableInfoViewDependenciesDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>[]

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putConnection">putConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putCredential">putCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putFunction">putFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetConnection">resetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetCredential">resetCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetTable">resetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnection` <a name="putConnection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putConnection"></a>

```typescript
public putConnection(value: DataDatabricksTableTableInfoViewDependenciesDependenciesConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a>

---

##### `putCredential` <a name="putCredential" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putCredential"></a>

```typescript
public putCredential(value: DataDatabricksTableTableInfoViewDependenciesDependenciesCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a>

---

##### `putFunction` <a name="putFunction" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putFunction"></a>

```typescript
public putFunction(value: DataDatabricksTableTableInfoViewDependenciesDependenciesFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putTable"></a>

```typescript
public putTable(value: DataDatabricksTableTableInfoViewDependenciesDependenciesTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

---

##### `resetConnection` <a name="resetConnection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetConnection"></a>

```typescript
public resetConnection(): void
```

##### `resetCredential` <a name="resetCredential" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetCredential"></a>

```typescript
public resetCredential(): void
```

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetFunction"></a>

```typescript
public resetFunction(): void
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.resetTable"></a>

```typescript
public resetTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.connection">connection</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.connectionInput">connectionInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.credentialInput">credentialInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.functionInput">functionInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.connection"></a>

```typescript
public readonly connection: DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesConnectionOutputReference</a>

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.credential"></a>

```typescript
public readonly credential: DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesCredentialOutputReference</a>

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.function"></a>

```typescript
public readonly function: DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesFunctionOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.table"></a>

```typescript
public readonly table: DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference">DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference</a>

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.connectionInput"></a>

```typescript
public readonly connectionInput: DataDatabricksTableTableInfoViewDependenciesDependenciesConnection;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesConnection">DataDatabricksTableTableInfoViewDependenciesDependenciesConnection</a>

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.credentialInput"></a>

```typescript
public readonly credentialInput: DataDatabricksTableTableInfoViewDependenciesDependenciesCredential;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesCredential">DataDatabricksTableTableInfoViewDependenciesDependenciesCredential</a>

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: DataDatabricksTableTableInfoViewDependenciesDependenciesFunction;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesFunction">DataDatabricksTableTableInfoViewDependenciesDependenciesFunction</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: DataDatabricksTableTableInfoViewDependenciesDependenciesTable;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksTableTableInfoViewDependenciesDependencies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>

---


### DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullNameInput">tableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullName">tableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableFullNameInput`<sup>Optional</sup> <a name="tableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullNameInput"></a>

```typescript
public readonly tableFullNameInput: string;
```

- *Type:* string

---

##### `tableFullName`<sup>Required</sup> <a name="tableFullName" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.tableFullName"></a>

```typescript
public readonly tableFullName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoViewDependenciesDependenciesTable;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesTable">DataDatabricksTableTableInfoViewDependenciesDependenciesTable</a>

---


### DataDatabricksTableTableInfoViewDependenciesOutputReference <a name="DataDatabricksTableTableInfoViewDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksTable } from '@cdktf/provider-databricks'

new dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resetDependencies">resetDependencies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependencies` <a name="putDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.putDependencies"></a>

```typescript
public putDependencies(value: IResolvable | DataDatabricksTableTableInfoViewDependenciesDependencies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.putDependencies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>[]

---

##### `resetDependencies` <a name="resetDependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.resetDependencies"></a>

```typescript
public resetDependencies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList">DataDatabricksTableTableInfoViewDependenciesDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependenciesInput">dependenciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependencies"></a>

```typescript
public readonly dependencies: DataDatabricksTableTableInfoViewDependenciesDependenciesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependenciesList">DataDatabricksTableTableInfoViewDependenciesDependenciesList</a>

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.dependenciesInput"></a>

```typescript
public readonly dependenciesInput: IResolvable | DataDatabricksTableTableInfoViewDependenciesDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesDependencies">DataDatabricksTableTableInfoViewDependenciesDependencies</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksTableTableInfoViewDependencies;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksTable.DataDatabricksTableTableInfoViewDependencies">DataDatabricksTableTableInfoViewDependencies</a>

---



