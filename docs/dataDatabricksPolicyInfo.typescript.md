# `dataDatabricksPolicyInfo` Submodule <a name="`dataDatabricksPolicyInfo` Submodule" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPolicyInfo <a name="DataDatabricksPolicyInfo" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info databricks_policy_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfo.DataDatabricksPolicyInfo(scope: Construct, id: string, config: DataDatabricksPolicyInfoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig">DataDatabricksPolicyInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig">DataDatabricksPolicyInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putColumnMask">putColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putMatchColumns">putMatchColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putRowFilter">putRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetColumnMask">resetColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetExceptPrincipals">resetExceptPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetMatchColumns">resetMatchColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOnSecurableFullname">resetOnSecurableFullname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOnSecurableType">resetOnSecurableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetRowFilter">resetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetWhenCondition">resetWhenCondition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putColumnMask` <a name="putColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putColumnMask"></a>

```typescript
public putColumnMask(value: DataDatabricksPolicyInfoColumnMask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putColumnMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a>

---

##### `putMatchColumns` <a name="putMatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putMatchColumns"></a>

```typescript
public putMatchColumns(value: IResolvable | DataDatabricksPolicyInfoMatchColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putMatchColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>[]

---

##### `putRowFilter` <a name="putRowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putRowFilter"></a>

```typescript
public putRowFilter(value: DataDatabricksPolicyInfoRowFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a>

---

##### `resetColumnMask` <a name="resetColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetColumnMask"></a>

```typescript
public resetColumnMask(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetExceptPrincipals` <a name="resetExceptPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetExceptPrincipals"></a>

```typescript
public resetExceptPrincipals(): void
```

##### `resetMatchColumns` <a name="resetMatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetMatchColumns"></a>

```typescript
public resetMatchColumns(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOnSecurableFullname` <a name="resetOnSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOnSecurableFullname"></a>

```typescript
public resetOnSecurableFullname(): void
```

##### `resetOnSecurableType` <a name="resetOnSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOnSecurableType"></a>

```typescript
public resetOnSecurableType(): void
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetRowFilter"></a>

```typescript
public resetRowFilter(): void
```

##### `resetWhenCondition` <a name="resetWhenCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetWhenCondition"></a>

```typescript
public resetWhenCondition(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksPolicyInfo resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksPolicyInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPolicyInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPolicyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksPolicyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMask">columnMask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference">DataDatabricksPolicyInfoColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumns">matchColumns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList">DataDatabricksPolicyInfoMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference">DataDatabricksPolicyInfoRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMaskInput">columnMaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipalsInput">exceptPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableTypeInput">forSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumnsInput">matchColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullnameInput">onSecurableFullnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableTypeInput">onSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilterInput">rowFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipalsInput">toPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenConditionInput">whenConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipals">exceptPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableType">forSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipals">toPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenCondition">whenCondition</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `columnMask`<sup>Required</sup> <a name="columnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMask"></a>

```typescript
public readonly columnMask: DataDatabricksPolicyInfoColumnMaskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference">DataDatabricksPolicyInfoColumnMaskOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchColumns`<sup>Required</sup> <a name="matchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumns"></a>

```typescript
public readonly matchColumns: DataDatabricksPolicyInfoMatchColumnsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList">DataDatabricksPolicyInfoMatchColumnsList</a>

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilter"></a>

```typescript
public readonly rowFilter: DataDatabricksPolicyInfoRowFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference">DataDatabricksPolicyInfoRowFilterOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `columnMaskInput`<sup>Optional</sup> <a name="columnMaskInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMaskInput"></a>

```typescript
public readonly columnMaskInput: IResolvable | DataDatabricksPolicyInfoColumnMask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `exceptPrincipalsInput`<sup>Optional</sup> <a name="exceptPrincipalsInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipalsInput"></a>

```typescript
public readonly exceptPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `forSecurableTypeInput`<sup>Optional</sup> <a name="forSecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableTypeInput"></a>

```typescript
public readonly forSecurableTypeInput: string;
```

- *Type:* string

---

##### `matchColumnsInput`<sup>Optional</sup> <a name="matchColumnsInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumnsInput"></a>

```typescript
public readonly matchColumnsInput: IResolvable | DataDatabricksPolicyInfoMatchColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onSecurableFullnameInput`<sup>Optional</sup> <a name="onSecurableFullnameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullnameInput"></a>

```typescript
public readonly onSecurableFullnameInput: string;
```

- *Type:* string

---

##### `onSecurableTypeInput`<sup>Optional</sup> <a name="onSecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableTypeInput"></a>

```typescript
public readonly onSecurableTypeInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilterInput"></a>

```typescript
public readonly rowFilterInput: IResolvable | DataDatabricksPolicyInfoRowFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a>

---

##### `toPrincipalsInput`<sup>Optional</sup> <a name="toPrincipalsInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipalsInput"></a>

```typescript
public readonly toPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `whenConditionInput`<sup>Optional</sup> <a name="whenConditionInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenConditionInput"></a>

```typescript
public readonly whenConditionInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `exceptPrincipals`<sup>Required</sup> <a name="exceptPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipals"></a>

```typescript
public readonly exceptPrincipals: string[];
```

- *Type:* string[]

---

##### `forSecurableType`<sup>Required</sup> <a name="forSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableType"></a>

```typescript
public readonly forSecurableType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `toPrincipals`<sup>Required</sup> <a name="toPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipals"></a>

```typescript
public readonly toPrincipals: string[];
```

- *Type:* string[]

---

##### `whenCondition`<sup>Required</sup> <a name="whenCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenCondition"></a>

```typescript
public readonly whenCondition: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPolicyInfoColumnMask <a name="DataDatabricksPolicyInfoColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfoColumnMask: dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.onColumn">onColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.using">using</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}.

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.onColumn"></a>

```typescript
public readonly onColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.using"></a>

```typescript
public readonly using: IResolvable | DataDatabricksPolicyInfoColumnMaskUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}.

---

### DataDatabricksPolicyInfoColumnMaskUsing <a name="DataDatabricksPolicyInfoColumnMaskUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfoColumnMaskUsing: dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.constant">constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}.

---

### DataDatabricksPolicyInfoConfig <a name="DataDatabricksPolicyInfoConfig" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfoConfig: dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forSecurableType">forSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#for_securable_type DataDatabricksPolicyInfo#for_securable_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#policy_type DataDatabricksPolicyInfo#policy_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.toPrincipals">toPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#to_principals DataDatabricksPolicyInfo#to_principals}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.columnMask">columnMask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#column_mask DataDatabricksPolicyInfo#column_mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#comment DataDatabricksPolicyInfo#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.exceptPrincipals">exceptPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#except_principals DataDatabricksPolicyInfo#except_principals}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.matchColumns">matchColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#match_columns DataDatabricksPolicyInfo#match_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#row_filter DataDatabricksPolicyInfo#row_filter}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.whenCondition">whenCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#when_condition DataDatabricksPolicyInfo#when_condition}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `forSecurableType`<sup>Required</sup> <a name="forSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forSecurableType"></a>

```typescript
public readonly forSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#for_securable_type DataDatabricksPolicyInfo#for_securable_type}.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#policy_type DataDatabricksPolicyInfo#policy_type}.

---

##### `toPrincipals`<sup>Required</sup> <a name="toPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.toPrincipals"></a>

```typescript
public readonly toPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#to_principals DataDatabricksPolicyInfo#to_principals}.

---

##### `columnMask`<sup>Optional</sup> <a name="columnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.columnMask"></a>

```typescript
public readonly columnMask: DataDatabricksPolicyInfoColumnMask;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#column_mask DataDatabricksPolicyInfo#column_mask}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#comment DataDatabricksPolicyInfo#comment}.

---

##### `exceptPrincipals`<sup>Optional</sup> <a name="exceptPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.exceptPrincipals"></a>

```typescript
public readonly exceptPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#except_principals DataDatabricksPolicyInfo#except_principals}.

---

##### `matchColumns`<sup>Optional</sup> <a name="matchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.matchColumns"></a>

```typescript
public readonly matchColumns: IResolvable | DataDatabricksPolicyInfoMatchColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#match_columns DataDatabricksPolicyInfo#match_columns}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}.

---

##### `onSecurableFullname`<sup>Optional</sup> <a name="onSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}.

---

##### `onSecurableType`<sup>Optional</sup> <a name="onSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}.

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.rowFilter"></a>

```typescript
public readonly rowFilter: DataDatabricksPolicyInfoRowFilter;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#row_filter DataDatabricksPolicyInfo#row_filter}.

---

##### `whenCondition`<sup>Optional</sup> <a name="whenCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.whenCondition"></a>

```typescript
public readonly whenCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#when_condition DataDatabricksPolicyInfo#when_condition}.

---

### DataDatabricksPolicyInfoMatchColumns <a name="DataDatabricksPolicyInfoMatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfoMatchColumns: dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}.

---

### DataDatabricksPolicyInfoRowFilter <a name="DataDatabricksPolicyInfoRowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfoRowFilter: dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.using">using</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.using"></a>

```typescript
public readonly using: IResolvable | DataDatabricksPolicyInfoRowFilterUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}.

---

### DataDatabricksPolicyInfoRowFilterUsing <a name="DataDatabricksPolicyInfoRowFilterUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

const dataDatabricksPolicyInfoRowFilterUsing: dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.constant">constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPolicyInfoColumnMaskOutputReference <a name="DataDatabricksPolicyInfoColumnMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing"></a>

```typescript
public putUsing(value: IResolvable | DataDatabricksPolicyInfoColumnMaskUsing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>[]

---

##### `resetUsing` <a name="resetUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.using">using</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList">DataDatabricksPolicyInfoColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumnInput">onColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.usingInput">usingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumn">onColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.using"></a>

```typescript
public readonly using: DataDatabricksPolicyInfoColumnMaskUsingList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList">DataDatabricksPolicyInfoColumnMaskUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `onColumnInput`<sup>Optional</sup> <a name="onColumnInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumnInput"></a>

```typescript
public readonly onColumnInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: IResolvable | DataDatabricksPolicyInfoColumnMaskUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumn"></a>

```typescript
public readonly onColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfoColumnMask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingList <a name="DataDatabricksPolicyInfoColumnMaskUsingList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfoColumnMaskUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfoColumnMaskUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>[]

---


### DataDatabricksPolicyInfoColumnMaskUsingOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConstant` <a name="resetConstant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfoColumnMaskUsing;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>

---


### DataDatabricksPolicyInfoMatchColumnsList <a name="DataDatabricksPolicyInfoMatchColumnsList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfoMatchColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfoMatchColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>[]

---


### DataDatabricksPolicyInfoMatchColumnsOutputReference <a name="DataDatabricksPolicyInfoMatchColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfoMatchColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>

---


### DataDatabricksPolicyInfoRowFilterOutputReference <a name="DataDatabricksPolicyInfoRowFilterOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing"></a>

```typescript
public putUsing(value: IResolvable | DataDatabricksPolicyInfoRowFilterUsing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>[]

---

##### `resetUsing` <a name="resetUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.using">using</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList">DataDatabricksPolicyInfoRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.usingInput">usingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.using"></a>

```typescript
public readonly using: DataDatabricksPolicyInfoRowFilterUsingList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList">DataDatabricksPolicyInfoRowFilterUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: IResolvable | DataDatabricksPolicyInfoRowFilterUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfoRowFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a>

---


### DataDatabricksPolicyInfoRowFilterUsingList <a name="DataDatabricksPolicyInfoRowFilterUsingList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get"></a>

```typescript
public get(index: number): DataDatabricksPolicyInfoRowFilterUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfoRowFilterUsing[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>[]

---


### DataDatabricksPolicyInfoRowFilterUsingOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer"></a>

```typescript
import { dataDatabricksPolicyInfo } from '@cdktf/provider-databricks'

new dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConstant` <a name="resetConstant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksPolicyInfoRowFilterUsing;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>

---



