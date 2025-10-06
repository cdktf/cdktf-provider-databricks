# `dataDatabricksPolicyInfos` Submodule <a name="`dataDatabricksPolicyInfos` Submodule" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPolicyInfos <a name="DataDatabricksPolicyInfos" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos databricks_policy_infos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfos(scope: Construct, id: string, config: DataDatabricksPolicyInfosConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig">DataDatabricksPolicyInfosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig">DataDatabricksPolicyInfosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksPolicyInfos resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksPolicyInfos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPolicyInfos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPolicyInfos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksPolicyInfos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList">DataDatabricksPolicyInfosPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullnameInput">onSecurableFullnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableTypeInput">onSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.policies"></a>

```typescript
public readonly policies: DataDatabricksPolicyInfosPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList">DataDatabricksPolicyInfosPoliciesList</a>

---

##### `onSecurableFullnameInput`<sup>Optional</sup> <a name="onSecurableFullnameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullnameInput"></a>

```typescript
public readonly onSecurableFullnameInput: string;
```

- *Type:* string

---

##### `onSecurableTypeInput`<sup>Optional</sup> <a name="onSecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableTypeInput"></a>

```typescript
public readonly onSecurableTypeInput: string;
```

- *Type:* string

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPolicyInfosConfig <a name="DataDatabricksPolicyInfosConfig" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfosConfig: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}.

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}.

---

### DataDatabricksPolicyInfosPolicies <a name="DataDatabricksPolicyInfosPolicies" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfosPolicies: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.forSecurableType">forSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#for_securable_type DataDatabricksPolicyInfos#for_securable_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#policy_type DataDatabricksPolicyInfos#policy_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.toPrincipals">toPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#to_principals DataDatabricksPolicyInfos#to_principals}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.columnMask">columnMask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#column_mask DataDatabricksPolicyInfos#column_mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#comment DataDatabricksPolicyInfos#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.exceptPrincipals">exceptPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#except_principals DataDatabricksPolicyInfos#except_principals}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.matchColumns">matchColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#match_columns DataDatabricksPolicyInfos#match_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#name DataDatabricksPolicyInfos#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#row_filter DataDatabricksPolicyInfos#row_filter}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.whenCondition">whenCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#when_condition DataDatabricksPolicyInfos#when_condition}. |

---

##### `forSecurableType`<sup>Required</sup> <a name="forSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.forSecurableType"></a>

```typescript
public readonly forSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#for_securable_type DataDatabricksPolicyInfos#for_securable_type}.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#policy_type DataDatabricksPolicyInfos#policy_type}.

---

##### `toPrincipals`<sup>Required</sup> <a name="toPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.toPrincipals"></a>

```typescript
public readonly toPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#to_principals DataDatabricksPolicyInfos#to_principals}.

---

##### `columnMask`<sup>Optional</sup> <a name="columnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.columnMask"></a>

```typescript
public readonly columnMask: DataDatabricksPolicyInfosPoliciesColumnMask;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#column_mask DataDatabricksPolicyInfos#column_mask}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#comment DataDatabricksPolicyInfos#comment}.

---

##### `exceptPrincipals`<sup>Optional</sup> <a name="exceptPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.exceptPrincipals"></a>

```typescript
public readonly exceptPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#except_principals DataDatabricksPolicyInfos#except_principals}.

---

##### `matchColumns`<sup>Optional</sup> <a name="matchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.matchColumns"></a>

```typescript
public readonly matchColumns: IResolvable | DataDatabricksPolicyInfosPoliciesMatchColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#match_columns DataDatabricksPolicyInfos#match_columns}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#name DataDatabricksPolicyInfos#name}.

---

##### `onSecurableFullname`<sup>Optional</sup> <a name="onSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}.

---

##### `onSecurableType`<sup>Optional</sup> <a name="onSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}.

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.rowFilter"></a>

```typescript
public readonly rowFilter: DataDatabricksPolicyInfosPoliciesRowFilter;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#row_filter DataDatabricksPolicyInfos#row_filter}.

---

##### `whenCondition`<sup>Optional</sup> <a name="whenCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.whenCondition"></a>

```typescript
public readonly whenCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#when_condition DataDatabricksPolicyInfos#when_condition}.

---

### DataDatabricksPolicyInfosPoliciesColumnMask <a name="DataDatabricksPolicyInfosPoliciesColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfosPoliciesColumnMask: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.onColumn">onColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#on_column DataDatabricksPolicyInfos#on_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.using">using</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}.

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.onColumn"></a>

```typescript
public readonly onColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#on_column DataDatabricksPolicyInfos#on_column}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.using"></a>

```typescript
public readonly using: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsing <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfosPoliciesColumnMaskUsing: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.constant">constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}.

---

### DataDatabricksPolicyInfosPoliciesMatchColumns <a name="DataDatabricksPolicyInfosPoliciesMatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfosPoliciesMatchColumns: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#condition DataDatabricksPolicyInfos#condition}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#condition DataDatabricksPolicyInfos#condition}.

---

### DataDatabricksPolicyInfosPoliciesRowFilter <a name="DataDatabricksPolicyInfosPoliciesRowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfosPoliciesRowFilter: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.using">using</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.using"></a>

```typescript
public readonly using: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsing <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfosPoliciesRowFilterUsing: dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.constant">constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing"></a>

```typescript
public putUsing(value: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

---

##### `resetUsing` <a name="resetUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.using">using</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList">DataDatabricksPolicyInfosPoliciesColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumnInput">onColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.usingInput">usingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumn">onColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.using"></a>

```typescript
public readonly using: DataDatabricksPolicyInfosPoliciesColumnMaskUsingList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList">DataDatabricksPolicyInfosPoliciesColumnMaskUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `onColumnInput`<sup>Optional</sup> <a name="onColumnInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumnInput"></a>

```typescript
public readonly onColumnInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumn"></a>

```typescript
public readonly onColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a>

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingList <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConstant` <a name="resetConstant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMaskUsing;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>

---


### DataDatabricksPolicyInfosPoliciesList <a name="DataDatabricksPolicyInfosPoliciesList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfosPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a>[]

---


### DataDatabricksPolicyInfosPoliciesMatchColumnsList <a name="DataDatabricksPolicyInfosPoliciesMatchColumnsList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesMatchColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]

---


### DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference <a name="DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesMatchColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>

---


### DataDatabricksPolicyInfosPoliciesOutputReference <a name="DataDatabricksPolicyInfosPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putColumnMask">putColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putMatchColumns">putMatchColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putRowFilter">putRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetColumnMask">resetColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetExceptPrincipals">resetExceptPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetMatchColumns">resetMatchColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetOnSecurableFullname">resetOnSecurableFullname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetOnSecurableType">resetOnSecurableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetRowFilter">resetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetWhenCondition">resetWhenCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnMask` <a name="putColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putColumnMask"></a>

```typescript
public putColumnMask(value: DataDatabricksPolicyInfosPoliciesColumnMask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putColumnMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a>

---

##### `putMatchColumns` <a name="putMatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putMatchColumns"></a>

```typescript
public putMatchColumns(value: IResolvable | DataDatabricksPolicyInfosPoliciesMatchColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putMatchColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]

---

##### `putRowFilter` <a name="putRowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putRowFilter"></a>

```typescript
public putRowFilter(value: DataDatabricksPolicyInfosPoliciesRowFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a>

---

##### `resetColumnMask` <a name="resetColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetColumnMask"></a>

```typescript
public resetColumnMask(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetExceptPrincipals` <a name="resetExceptPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetExceptPrincipals"></a>

```typescript
public resetExceptPrincipals(): void
```

##### `resetMatchColumns` <a name="resetMatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetMatchColumns"></a>

```typescript
public resetMatchColumns(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOnSecurableFullname` <a name="resetOnSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetOnSecurableFullname"></a>

```typescript
public resetOnSecurableFullname(): void
```

##### `resetOnSecurableType` <a name="resetOnSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetOnSecurableType"></a>

```typescript
public resetOnSecurableType(): void
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetRowFilter"></a>

```typescript
public resetRowFilter(): void
```

##### `resetWhenCondition` <a name="resetWhenCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resetWhenCondition"></a>

```typescript
public resetWhenCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.columnMask">columnMask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.matchColumns">matchColumns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList">DataDatabricksPolicyInfosPoliciesMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.columnMaskInput">columnMaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.exceptPrincipalsInput">exceptPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.forSecurableTypeInput">forSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.matchColumnsInput">matchColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullnameInput">onSecurableFullnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableTypeInput">onSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.rowFilterInput">rowFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.toPrincipalsInput">toPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.whenConditionInput">whenConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.exceptPrincipals">exceptPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.forSecurableType">forSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.toPrincipals">toPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.whenCondition">whenCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnMask`<sup>Required</sup> <a name="columnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.columnMask"></a>

```typescript
public readonly columnMask: DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchColumns`<sup>Required</sup> <a name="matchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.matchColumns"></a>

```typescript
public readonly matchColumns: DataDatabricksPolicyInfosPoliciesMatchColumnsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList">DataDatabricksPolicyInfosPoliciesMatchColumnsList</a>

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.rowFilter"></a>

```typescript
public readonly rowFilter: DataDatabricksPolicyInfosPoliciesRowFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `columnMaskInput`<sup>Optional</sup> <a name="columnMaskInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.columnMaskInput"></a>

```typescript
public readonly columnMaskInput: IResolvable | DataDatabricksPolicyInfosPoliciesColumnMask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `exceptPrincipalsInput`<sup>Optional</sup> <a name="exceptPrincipalsInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.exceptPrincipalsInput"></a>

```typescript
public readonly exceptPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `forSecurableTypeInput`<sup>Optional</sup> <a name="forSecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.forSecurableTypeInput"></a>

```typescript
public readonly forSecurableTypeInput: string;
```

- *Type:* string

---

##### `matchColumnsInput`<sup>Optional</sup> <a name="matchColumnsInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.matchColumnsInput"></a>

```typescript
public readonly matchColumnsInput: IResolvable | DataDatabricksPolicyInfosPoliciesMatchColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onSecurableFullnameInput`<sup>Optional</sup> <a name="onSecurableFullnameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullnameInput"></a>

```typescript
public readonly onSecurableFullnameInput: string;
```

- *Type:* string

---

##### `onSecurableTypeInput`<sup>Optional</sup> <a name="onSecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableTypeInput"></a>

```typescript
public readonly onSecurableTypeInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.rowFilterInput"></a>

```typescript
public readonly rowFilterInput: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a>

---

##### `toPrincipalsInput`<sup>Optional</sup> <a name="toPrincipalsInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.toPrincipalsInput"></a>

```typescript
public readonly toPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `whenConditionInput`<sup>Optional</sup> <a name="whenConditionInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.whenConditionInput"></a>

```typescript
public readonly whenConditionInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `exceptPrincipals`<sup>Required</sup> <a name="exceptPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.exceptPrincipals"></a>

```typescript
public readonly exceptPrincipals: string[];
```

- *Type:* string[]

---

##### `forSecurableType`<sup>Required</sup> <a name="forSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.forSecurableType"></a>

```typescript
public readonly forSecurableType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `toPrincipals`<sup>Required</sup> <a name="toPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.toPrincipals"></a>

```typescript
public readonly toPrincipals: string[];
```

- *Type:* string[]

---

##### `whenCondition`<sup>Required</sup> <a name="whenCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.whenCondition"></a>

```typescript
public readonly whenCondition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksPolicyInfosPolicies;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing"></a>

```typescript
public putUsing(value: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

---

##### `resetUsing` <a name="resetUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.using">using</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList">DataDatabricksPolicyInfosPoliciesRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.usingInput">usingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.using"></a>

```typescript
public readonly using: DataDatabricksPolicyInfosPoliciesRowFilterUsingList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList">DataDatabricksPolicyInfosPoliciesRowFilterUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingList <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfos } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConstant` <a name="resetConstant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfosPoliciesRowFilterUsing;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>

---



