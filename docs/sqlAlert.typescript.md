# `databricks_sql_alert`

Refer to the Terraform Registory for docs: [`databricks_sql_alert`](https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert).

# `sqlAlert` Submodule <a name="`sqlAlert` Submodule" id="@cdktf/provider-databricks.sqlAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlAlert <a name="SqlAlert" id="@cdktf/provider-databricks.sqlAlert.SqlAlert"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert databricks_sql_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer"></a>

```typescript
import { sqlAlert } from '@cdktf/provider-databricks'

new sqlAlert.SqlAlert(scope: Construct, id: string, config: SqlAlertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig">SqlAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig">SqlAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetRearm">resetRearm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions"></a>

```typescript
public putOptions(value: SqlAlertOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetRearm` <a name="resetRearm" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetRearm"></a>

```typescript
public resetRearm(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isConstruct"></a>

```typescript
import { sqlAlert } from '@cdktf/provider-databricks'

sqlAlert.SqlAlert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformElement"></a>

```typescript
import { sqlAlert } from '@cdktf/provider-databricks'

sqlAlert.SqlAlert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformResource"></a>

```typescript
import { sqlAlert } from '@cdktf/provider-databricks'

sqlAlert.SqlAlert.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.options">options</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference">SqlAlertOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAtInput">createdAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryIdInput">queryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearmInput">rearmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAtInput">updatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryId">queryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearm">rearm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.options"></a>

```typescript
public readonly options: SqlAlertOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference">SqlAlertOptionsOutputReference</a>

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.optionsInput"></a>

```typescript
public readonly optionsInput: SqlAlertOptions;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `queryIdInput`<sup>Optional</sup> <a name="queryIdInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryIdInput"></a>

```typescript
public readonly queryIdInput: string;
```

- *Type:* string

---

##### `rearmInput`<sup>Optional</sup> <a name="rearmInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearmInput"></a>

```typescript
public readonly rearmInput: number;
```

- *Type:* number

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryId"></a>

```typescript
public readonly queryId: string;
```

- *Type:* string

---

##### `rearm`<sup>Required</sup> <a name="rearm" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearm"></a>

```typescript
public readonly rearm: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlAlertConfig <a name="SqlAlertConfig" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.Initializer"></a>

```typescript
import { sqlAlert } from '@cdktf/provider-databricks'

const sqlAlertConfig: sqlAlert.SqlAlertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#name SqlAlert#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.queryId">queryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#query_id SqlAlert#query_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.createdAt">createdAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#created_at SqlAlert#created_at}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#id SqlAlert#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#parent SqlAlert#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.rearm">rearm</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#rearm SqlAlert#rearm}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.updatedAt">updatedAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#updated_at SqlAlert#updated_at}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#name SqlAlert#name}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.options"></a>

```typescript
public readonly options: SqlAlertOptions;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#options SqlAlert#options}

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.queryId"></a>

```typescript
public readonly queryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#query_id SqlAlert#query_id}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#created_at SqlAlert#created_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#id SqlAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#parent SqlAlert#parent}.

---

##### `rearm`<sup>Optional</sup> <a name="rearm" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.rearm"></a>

```typescript
public readonly rearm: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#rearm SqlAlert#rearm}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#updated_at SqlAlert#updated_at}.

---

### SqlAlertOptions <a name="SqlAlertOptions" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.Initializer"></a>

```typescript
import { sqlAlert } from '@cdktf/provider-databricks'

const sqlAlertOptions: sqlAlert.SqlAlertOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.column">column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#column SqlAlert#column}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.op">op</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#op SqlAlert#op}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#value SqlAlert#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customBody">customBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#custom_body SqlAlert#custom_body}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customSubject">customSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#custom_subject SqlAlert#custom_subject}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.muted">muted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#muted SqlAlert#muted}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#column SqlAlert#column}.

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.op"></a>

```typescript
public readonly op: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#op SqlAlert#op}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#value SqlAlert#value}.

---

##### `customBody`<sup>Optional</sup> <a name="customBody" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customBody"></a>

```typescript
public readonly customBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#custom_body SqlAlert#custom_body}.

---

##### `customSubject`<sup>Optional</sup> <a name="customSubject" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customSubject"></a>

```typescript
public readonly customSubject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#custom_subject SqlAlert#custom_subject}.

---

##### `muted`<sup>Optional</sup> <a name="muted" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.muted"></a>

```typescript
public readonly muted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/sql_alert#muted SqlAlert#muted}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlAlertOptionsOutputReference <a name="SqlAlertOptionsOutputReference" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer"></a>

```typescript
import { sqlAlert } from '@cdktf/provider-databricks'

new sqlAlert.SqlAlertOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomBody">resetCustomBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomSubject">resetCustomSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetMuted">resetMuted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomBody` <a name="resetCustomBody" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomBody"></a>

```typescript
public resetCustomBody(): void
```

##### `resetCustomSubject` <a name="resetCustomSubject" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomSubject"></a>

```typescript
public resetCustomSubject(): void
```

##### `resetMuted` <a name="resetMuted" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetMuted"></a>

```typescript
public resetMuted(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBodyInput">customBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubjectInput">customSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.mutedInput">mutedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.opInput">opInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBody">customBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubject">customSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.muted">muted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.op">op</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `customBodyInput`<sup>Optional</sup> <a name="customBodyInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBodyInput"></a>

```typescript
public readonly customBodyInput: string;
```

- *Type:* string

---

##### `customSubjectInput`<sup>Optional</sup> <a name="customSubjectInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubjectInput"></a>

```typescript
public readonly customSubjectInput: string;
```

- *Type:* string

---

##### `mutedInput`<sup>Optional</sup> <a name="mutedInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.mutedInput"></a>

```typescript
public readonly mutedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `opInput`<sup>Optional</sup> <a name="opInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.opInput"></a>

```typescript
public readonly opInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `customBody`<sup>Required</sup> <a name="customBody" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBody"></a>

```typescript
public readonly customBody: string;
```

- *Type:* string

---

##### `customSubject`<sup>Required</sup> <a name="customSubject" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubject"></a>

```typescript
public readonly customSubject: string;
```

- *Type:* string

---

##### `muted`<sup>Required</sup> <a name="muted" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.muted"></a>

```typescript
public readonly muted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.op"></a>

```typescript
public readonly op: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlAlertOptions;
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---



