# `dataDatabricksAwsUnityCatalogAssumeRolePolicy` Submodule <a name="`dataDatabricksAwsUnityCatalogAssumeRolePolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsUnityCatalogAssumeRolePolicy <a name="DataDatabricksAwsUnityCatalogAssumeRolePolicy" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy databricks_aws_unity_catalog_assume_role_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer"></a>

```typescript
import { dataDatabricksAwsUnityCatalogAssumeRolePolicy } from '@cdktf/provider-databricks'

new dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy(scope: Construct, id: string, config: DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig">DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig">DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetAwsPartition">resetAwsPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetUnityCatalogIamArn">resetUnityCatalogIamArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAwsPartition` <a name="resetAwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetAwsPartition"></a>

```typescript
public resetAwsPartition(): void
```

##### `resetUnityCatalogIamArn` <a name="resetUnityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetUnityCatalogIamArn"></a>

```typescript
public resetUnityCatalogIamArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogAssumeRolePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct"></a>

```typescript
import { dataDatabricksAwsUnityCatalogAssumeRolePolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement"></a>

```typescript
import { dataDatabricksAwsUnityCatalogAssumeRolePolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAwsUnityCatalogAssumeRolePolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport"></a>

```typescript
import { dataDatabricksAwsUnityCatalogAssumeRolePolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogAssumeRolePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAwsUnityCatalogAssumeRolePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAwsUnityCatalogAssumeRolePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsUnityCatalogAssumeRolePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.json">json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartitionInput">awsPartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArnInput">unityCatalogIamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartition">awsPartition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArn">unityCatalogIamArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `awsPartitionInput`<sup>Optional</sup> <a name="awsPartitionInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartitionInput"></a>

```typescript
public readonly awsPartitionInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `unityCatalogIamArnInput`<sup>Optional</sup> <a name="unityCatalogIamArnInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArnInput"></a>

```typescript
public readonly unityCatalogIamArnInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsPartition`<sup>Required</sup> <a name="awsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartition"></a>

```typescript
public readonly awsPartition: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `unityCatalogIamArn`<sup>Required</sup> <a name="unityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArn"></a>

```typescript
public readonly unityCatalogIamArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig <a name="DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.Initializer"></a>

```typescript
import { dataDatabricksAwsUnityCatalogAssumeRolePolicy } from '@cdktf/provider-databricks'

const dataDatabricksAwsUnityCatalogAssumeRolePolicyConfig: dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_account_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#external_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.roleName">roleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#role_name DataDatabricksAwsUnityCatalogAssumeRolePolicy#role_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsPartition">awsPartition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_partition DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.unityCatalogIamArn">unityCatalogIamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#unity_catalog_iam_arn DataDatabricksAwsUnityCatalogAssumeRolePolicy#unity_catalog_iam_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_account_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_account_id}.

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#external_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#external_id}.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#role_name DataDatabricksAwsUnityCatalogAssumeRolePolicy#role_name}.

---

##### `awsPartition`<sup>Optional</sup> <a name="awsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsPartition"></a>

```typescript
public readonly awsPartition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_partition DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_partition}.

---

##### `unityCatalogIamArn`<sup>Optional</sup> <a name="unityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.unityCatalogIamArn"></a>

```typescript
public readonly unityCatalogIamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.71.0/docs/data-sources/aws_unity_catalog_assume_role_policy#unity_catalog_iam_arn DataDatabricksAwsUnityCatalogAssumeRolePolicy#unity_catalog_iam_arn}.

---



