# `dataDatabricksSchema` Submodule <a name="`dataDatabricksSchema` Submodule" id="@cdktf/provider-databricks.dataDatabricksSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSchema <a name="DataDatabricksSchema" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema databricks_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer"></a>

```typescript
import { dataDatabricksSchema } from '@cdktf/provider-databricks'

new dataDatabricksSchema.DataDatabricksSchema(scope: Construct, id: string, config: DataDatabricksSchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig">DataDatabricksSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig">DataDatabricksSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo">putSchemaInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetSchemaInfo">resetSchemaInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSchemaInfo` <a name="putSchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo"></a>

```typescript
public putSchemaInfo(value: DataDatabricksSchemaSchemaInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSchemaInfo` <a name="resetSchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetSchemaInfo"></a>

```typescript
public resetSchemaInfo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSchema resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct"></a>

```typescript
import { dataDatabricksSchema } from '@cdktf/provider-databricks'

dataDatabricksSchema.DataDatabricksSchema.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement"></a>

```typescript
import { dataDatabricksSchema } from '@cdktf/provider-databricks'

dataDatabricksSchema.DataDatabricksSchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource"></a>

```typescript
import { dataDatabricksSchema } from '@cdktf/provider-databricks'

dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport"></a>

```typescript
import { dataDatabricksSchema } from '@cdktf/provider-databricks'

dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfo">schemaInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference">DataDatabricksSchemaSchemaInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfoInput">schemaInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `schemaInfo`<sup>Required</sup> <a name="schemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfo"></a>

```typescript
public readonly schemaInfo: DataDatabricksSchemaSchemaInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference">DataDatabricksSchemaSchemaInfoOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInfoInput`<sup>Optional</sup> <a name="schemaInfoInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfoInput"></a>

```typescript
public readonly schemaInfoInput: DataDatabricksSchemaSchemaInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSchemaConfig <a name="DataDatabricksSchemaConfig" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.Initializer"></a>

```typescript
import { dataDatabricksSchema } from '@cdktf/provider-databricks'

const dataDatabricksSchemaConfig: dataDatabricksSchema.DataDatabricksSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#name DataDatabricksSchema#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#id DataDatabricksSchema#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.schemaInfo">schemaInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | schema_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#name DataDatabricksSchema#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#id DataDatabricksSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schemaInfo`<sup>Optional</sup> <a name="schemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.schemaInfo"></a>

```typescript
public readonly schemaInfo: DataDatabricksSchemaSchemaInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

schema_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#schema_info DataDatabricksSchema#schema_info}

---

### DataDatabricksSchemaSchemaInfo <a name="DataDatabricksSchemaSchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.Initializer"></a>

```typescript
import { dataDatabricksSchema } from '@cdktf/provider-databricks'

const dataDatabricksSchemaSchemaInfo: dataDatabricksSchema.DataDatabricksSchemaSchemaInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#browse_only DataDatabricksSchema#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#catalog_name DataDatabricksSchema#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogType">catalogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#catalog_type DataDatabricksSchema#catalog_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#comment DataDatabricksSchema#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdAt">createdAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#created_at DataDatabricksSchema#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdBy">createdBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#created_by DataDatabricksSchema#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#enable_predictive_optimization DataDatabricksSchema#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#full_name DataDatabricksSchema#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#metastore_id DataDatabricksSchema#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#name DataDatabricksSchema#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#owner DataDatabricksSchema#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#properties DataDatabricksSchema#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.schemaId">schemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#schema_id DataDatabricksSchema#schema_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageLocation">storageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#storage_location DataDatabricksSchema#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageRoot">storageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#storage_root DataDatabricksSchema#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedAt">updatedAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#updated_at DataDatabricksSchema#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedBy">updatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#updated_by DataDatabricksSchema#updated_by}. |

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#browse_only DataDatabricksSchema#browse_only}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#catalog_name DataDatabricksSchema#catalog_name}.

---

##### `catalogType`<sup>Optional</sup> <a name="catalogType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogType"></a>

```typescript
public readonly catalogType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#catalog_type DataDatabricksSchema#catalog_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#comment DataDatabricksSchema#comment}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#created_at DataDatabricksSchema#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#created_by DataDatabricksSchema#created_by}.

---

##### `effectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.effectivePredictiveOptimizationFlag"></a>

```typescript
public readonly effectivePredictiveOptimizationFlag: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#effective_predictive_optimization_flag DataDatabricksSchema#effective_predictive_optimization_flag}

---

##### `enablePredictiveOptimization`<sup>Optional</sup> <a name="enablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.enablePredictiveOptimization"></a>

```typescript
public readonly enablePredictiveOptimization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#enable_predictive_optimization DataDatabricksSchema#enable_predictive_optimization}.

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#full_name DataDatabricksSchema#full_name}.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#metastore_id DataDatabricksSchema#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#name DataDatabricksSchema#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#owner DataDatabricksSchema#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#properties DataDatabricksSchema#properties}.

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#schema_id DataDatabricksSchema#schema_id}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#storage_location DataDatabricksSchema#storage_location}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#storage_root DataDatabricksSchema#storage_root}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#updated_at DataDatabricksSchema#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#updated_by DataDatabricksSchema#updated_by}.

---

### DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```typescript
import { dataDatabricksSchema } from '@cdktf/provider-databricks'

const dataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag: dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#value DataDatabricksSchema#value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">inheritedFromName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#inherited_from_name DataDatabricksSchema#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">inheritedFromType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#inherited_from_type DataDatabricksSchema#inherited_from_type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#value DataDatabricksSchema#value}.

---

##### `inheritedFromName`<sup>Optional</sup> <a name="inheritedFromName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```typescript
public readonly inheritedFromName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#inherited_from_name DataDatabricksSchema#inherited_from_name}.

---

##### `inheritedFromType`<sup>Optional</sup> <a name="inheritedFromType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```typescript
public readonly inheritedFromType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/schema#inherited_from_type DataDatabricksSchema#inherited_from_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSchema } from '@cdktf/provider-databricks'

new dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">resetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">resetInheritedFromType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInheritedFromName` <a name="resetInheritedFromName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```typescript
public resetInheritedFromName(): void
```

##### `resetInheritedFromType` <a name="resetInheritedFromType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```typescript
public resetInheritedFromType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">inheritedFromNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">inheritedFromTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">inheritedFromName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">inheritedFromType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inheritedFromNameInput`<sup>Optional</sup> <a name="inheritedFromNameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```typescript
public readonly inheritedFromNameInput: string;
```

- *Type:* string

---

##### `inheritedFromTypeInput`<sup>Optional</sup> <a name="inheritedFromTypeInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```typescript
public readonly inheritedFromTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `inheritedFromName`<sup>Required</sup> <a name="inheritedFromName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```typescript
public readonly inheritedFromName: string;
```

- *Type:* string

---

##### `inheritedFromType`<sup>Required</sup> <a name="inheritedFromType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```typescript
public readonly inheritedFromType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksSchemaSchemaInfoOutputReference <a name="DataDatabricksSchemaSchemaInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSchema } from '@cdktf/provider-databricks'

new dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag">putEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogType">resetCatalogType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEffectivePredictiveOptimizationFlag">resetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEnablePredictiveOptimization">resetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageRoot">resetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEffectivePredictiveOptimizationFlag` <a name="putEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```typescript
public putEffectivePredictiveOptimizationFlag(value: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetBrowseOnly"></a>

```typescript
public resetBrowseOnly(): void
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetCatalogType` <a name="resetCatalogType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogType"></a>

```typescript
public resetCatalogType(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetEffectivePredictiveOptimizationFlag` <a name="resetEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```typescript
public resetEffectivePredictiveOptimizationFlag(): void
```

##### `resetEnablePredictiveOptimization` <a name="resetEnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEnablePredictiveOptimization"></a>

```typescript
public resetEnablePredictiveOptimization(): void
```

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetFullName"></a>

```typescript
public resetFullName(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageLocation"></a>

```typescript
public resetStorageLocation(): void
```

##### `resetStorageRoot` <a name="resetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageRoot"></a>

```typescript
public resetStorageRoot(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedBy"></a>

```typescript
public resetUpdatedBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlag">effectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnlyInput">browseOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogTypeInput">catalogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">effectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimizationInput">enablePredictiveOptimizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocationInput">storageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRootInput">storageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogType">catalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimization">enablePredictiveOptimization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRoot">storageRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="effectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```typescript
public readonly effectivePredictiveOptimizationFlag: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnlyInput"></a>

```typescript
public readonly browseOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `catalogTypeInput`<sup>Optional</sup> <a name="catalogTypeInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogTypeInput"></a>

```typescript
public readonly catalogTypeInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: number;
```

- *Type:* number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `effectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="effectivePredictiveOptimizationFlagInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```typescript
public readonly effectivePredictiveOptimizationFlagInput: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---

##### `enablePredictiveOptimizationInput`<sup>Optional</sup> <a name="enablePredictiveOptimizationInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```typescript
public readonly enablePredictiveOptimizationInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: string;
```

- *Type:* string

---

##### `storageRootInput`<sup>Optional</sup> <a name="storageRootInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRootInput"></a>

```typescript
public readonly storageRootInput: string;
```

- *Type:* string

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: number;
```

- *Type:* number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedByInput"></a>

```typescript
public readonly updatedByInput: string;
```

- *Type:* string

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogType"></a>

```typescript
public readonly catalogType: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `enablePredictiveOptimization`<sup>Required</sup> <a name="enablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimization"></a>

```typescript
public readonly enablePredictiveOptimization: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksSchemaSchemaInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---



