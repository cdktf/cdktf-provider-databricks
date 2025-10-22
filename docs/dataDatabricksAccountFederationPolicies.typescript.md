# `dataDatabricksAccountFederationPolicies` Submodule <a name="`dataDatabricksAccountFederationPolicies` Submodule" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountFederationPolicies <a name="DataDatabricksAccountFederationPolicies" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies databricks_account_federation_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.Initializer"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

new dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies(scope: Construct, id: string, config?: DataDatabricksAccountFederationPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig">DataDatabricksAccountFederationPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig">DataDatabricksAccountFederationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAccountFederationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isConstruct"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isTerraformElement"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.generateConfigForImport"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksAccountFederationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountFederationPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountFederationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountFederationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList">DataDatabricksAccountFederationPoliciesPoliciesList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.policies"></a>

```typescript
public readonly policies: DataDatabricksAccountFederationPoliciesPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList">DataDatabricksAccountFederationPoliciesPoliciesList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountFederationPoliciesConfig <a name="DataDatabricksAccountFederationPoliciesConfig" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.Initializer"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

const dataDatabricksAccountFederationPoliciesConfig: dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

### DataDatabricksAccountFederationPoliciesPolicies <a name="DataDatabricksAccountFederationPoliciesPolicies" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies.Initializer"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

const dataDatabricksAccountFederationPoliciesPolicies: dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#description DataDatabricksAccountFederationPolicies#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy">DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#oidc_policy DataDatabricksAccountFederationPolicies#oidc_policy}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#description DataDatabricksAccountFederationPolicies#description}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies.property.oidcPolicy"></a>

```typescript
public readonly oidcPolicy: DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy">DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#oidc_policy DataDatabricksAccountFederationPolicies#oidc_policy}.

---

### DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy <a name="DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.Initializer"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

const dataDatabricksAccountFederationPoliciesPoliciesOidcPolicy: dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.audiences">audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#audiences DataDatabricksAccountFederationPolicies#audiences}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#issuer DataDatabricksAccountFederationPolicies#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.jwksJson">jwksJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#jwks_json DataDatabricksAccountFederationPolicies#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.jwksUri">jwksUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#jwks_uri DataDatabricksAccountFederationPolicies#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#subject DataDatabricksAccountFederationPolicies#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.subjectClaim">subjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#subject_claim DataDatabricksAccountFederationPolicies#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#audiences DataDatabricksAccountFederationPolicies#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#issuer DataDatabricksAccountFederationPolicies#issuer}.

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#jwks_json DataDatabricksAccountFederationPolicies#jwks_json}.

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#jwks_uri DataDatabricksAccountFederationPolicies#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#subject DataDatabricksAccountFederationPolicies#subject}.

---

##### `subjectClaim`<sup>Optional</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy.property.subjectClaim"></a>

```typescript
public readonly subjectClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/data-sources/account_federation_policies#subject_claim DataDatabricksAccountFederationPolicies#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountFederationPoliciesPoliciesList <a name="DataDatabricksAccountFederationPoliciesPoliciesList" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.Initializer"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

new dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataDatabricksAccountFederationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies">DataDatabricksAccountFederationPoliciesPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAccountFederationPoliciesPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies">DataDatabricksAccountFederationPoliciesPolicies</a>[]

---


### DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference <a name="DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

new dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubjectClaim">resetSubjectClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences"></a>

```typescript
public resetAudiences(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksJson"></a>

```typescript
public resetJwksJson(): void
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksUri"></a>

```typescript
public resetJwksUri(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetSubjectClaim` <a name="resetSubjectClaim" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubjectClaim"></a>

```typescript
public resetSubjectClaim(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUriInput">jwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput">subjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJson">jwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUri">jwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim">subjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy">DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput"></a>

```typescript
public readonly audiencesInput: string[];
```

- *Type:* string[]

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJsonInput"></a>

```typescript
public readonly jwksJsonInput: string;
```

- *Type:* string

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUriInput"></a>

```typescript
public readonly jwksUriInput: string;
```

- *Type:* string

---

##### `subjectClaimInput`<sup>Optional</sup> <a name="subjectClaimInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput"></a>

```typescript
public readonly subjectClaimInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim"></a>

```typescript
public readonly subjectClaim: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy">DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy</a>

---


### DataDatabricksAccountFederationPoliciesPoliciesOutputReference <a name="DataDatabricksAccountFederationPoliciesPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAccountFederationPolicies } from '@cdktf/provider-databricks'

new dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.putOidcPolicy">putOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.resetOidcPolicy">resetOidcPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOidcPolicy` <a name="putOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.putOidcPolicy"></a>

```typescript
public putOidcPolicy(value: DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy">DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOidcPolicy` <a name="resetOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.resetOidcPolicy"></a>

```typescript
public resetOidcPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput">oidcPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy">DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies">DataDatabricksAccountFederationPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oidcPolicy`<sup>Required</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.oidcPolicy"></a>

```typescript
public readonly oidcPolicy: DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksAccountFederationPoliciesPoliciesOidcPolicyOutputReference</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `oidcPolicyInput`<sup>Optional</sup> <a name="oidcPolicyInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput"></a>

```typescript
public readonly oidcPolicyInput: IResolvable | DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy">DataDatabricksAccountFederationPoliciesPoliciesOidcPolicy</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAccountFederationPoliciesPolicies;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicies.DataDatabricksAccountFederationPoliciesPolicies">DataDatabricksAccountFederationPoliciesPolicies</a>

---



